import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom"

import "./styles.css";

import PageHeader from "../../components/pageHeader";
import Input from "./../../components/Input/index";
import warningIcon from "../../assets/images/icons/warning.svg";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import api from './../../services/api';

const TeacherForm: React.FC = () => {

  const history = useHistory()

  const [name, setName] = useState("");
  const [avatar, setavatar] = useState("");
  const [whatsapp, setwhatsapp] = useState("");
  const [bio, setbio] = useState("");

  const [subject, setSubject] = useState("");
  const [cost, setcost] = useState("");

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: -1, from: "", to: "" },
  ]);

  function AddNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post("create-classes",{
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost : Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert("Cadastro Efetuado com Sucesso!")
      history.push("/")
    }).catch((e)=> {
      alert("Erro ao cadastrar! Verifique se todos os campos foram preenchidos corretamente")
    })
    console.log({ name, avatar, whatsapp, bio, subject, cost,scheduleItems });
  }
  function setScheduleItemsValue(index: number, field: string, value: string) {
    const UpdateScheduleItems = scheduleItems.map((s, i) => {
      if (i === index) {
        return { ...s, [field]: value };
      }
      return s;
    });
    setScheduleItems(UpdateScheduleItems);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrivel que você quer dar aulas!"
        description="O primeiro passo, é preencher esse formulario de inscrição"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus Dados</legend>
            <Input
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              lable="Nome Completo"
            ></Input>
            <Input
              name="avatar"
              value={avatar}
              onChange={(e) => {
                setavatar(e.target.value);
              }}
              lable="Avatar"
            ></Input>
            <Input
              name="whatsapp"
              value={whatsapp}
              onChange={(e) => {
                setwhatsapp(e.target.value);
              }}
              lable="WhatsApp"
            ></Input>
            <Textarea
              name="bio"
              value={bio}
              onChange={(e) => {
                setbio(e.target.value);
              }}
              lable="Biografia"
            ></Textarea>
          </fieldset>
          <fieldset>
            <legend>Sobre a Aula</legend>
            <Select
              name="subject"
              lable="Materia"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              options={[
                {
                  value: "",
                  label: "Selecione uma Materia",
                },
                {
                  value: "Biologia",
                  label: "Biologia",
                },
                {
                  value: "Fisica",
                  label: "Fisica",
                },
                {
                  value: "Filosofia",
                  label: "Filosofia",
                },
                {
                  value: "Geografia",
                  label: "Geografia",
                },
                {
                  value: "Historia",
                  label: "Historia",
                },
                {
                  value: "Ingles",
                  label: "Ingles",
                },
                {
                  value: "Matematica",
                  label: "Matematica",
                },
                {
                  value: "Portugues",
                  label: "Portugues",
                },
                {
                  value: "Quimica",
                  label: "Quimica",
                },
                {
                  value: "Sociologia",
                  label: "Sociologia",
                },
              ]}
            ></Select>
            <Input
              value={cost}
              onChange={(e) => {
                setcost(e.target.value);
              }}
              name="cost"
              lable="Custa Hora Aula"
            ></Input>
          </fieldset>
          <fieldset>
            <legend>
              Horarios Disponiveis
              <button id="novoDia" onClick={AddNewScheduleItem} type="button">
                + Novo horario
              </button>
            </legend>
            {scheduleItems.map((i, index) => {
              return (
                <div key={i.week_day} className="schedule-item">
                  <Select
                    name="week-day"
                    lable="Dia da Semana"
                    value={i.week_day}
                    onChange={(e) =>
                      setScheduleItemsValue(index, "week_day", e.target.value)
                    }
                    options={[
                      {
                        value: "-1",
                        label: "Selecione um",
                      },
                      {
                        value: "0",
                        label: "Domingo",
                      },
                      {
                        value: "2",
                        label: "Segunda-feira",
                      },
                      {
                        value: "3",
                        label: "Terça-feira",
                      },
                      {
                        value: "4",
                        label: "Quarta-feira",
                      },
                      {
                        value: "5",
                        label: "Quinta-feira",
                      },
                      {
                        value: "6",
                        label: "Sexta",
                      },
                    ]}
                  ></Select>
                  <Input
                    name="from"
                    type="time"
                    value={i.from}
                    lable="Das"
                    onChange={(e) =>
                      setScheduleItemsValue(index, "from", e.target.value)
                    }
                  ></Input>
                  <Input
                    value={i.to}
                    name="to"
                    type="time"
                    lable="Até"
                    onChange={(e) =>
                      setScheduleItemsValue(index, "to", e.target.value)
                    }
                  ></Input>
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Important" />
              Importante ! <br />
              Preencha todos os campos
            </p>
            <button id="buttonSubmit" type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
