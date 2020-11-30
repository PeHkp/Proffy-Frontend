import React, { useState, FormEvent } from "react";
import "./styles.css";

import PageHeader from "../../components/pageHeader";

import TeacherItem from "../../components/TeacherItem";
import Input from "./../../components/Input/index";
import Select from "../../components/Select";
import api from "./../../services/api";

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState("");
  const [week_day, setweek_day] = useState("");
  const [time, settime] = useState("");

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get("list-classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });
    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponiveis!">
        <form onSubmit={searchTeachers} id="search-teachers">
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
                label: "Selecione uma",
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
          <Select
            name="week-day"
            lable="Dia da Semana"
            value={week_day}
            onChange={(e) => {
              setweek_day(e.target.value);
            }}
            options={[
              {
                value: " ",
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
            type="time"
            name="time"
            value={time}
            onChange={(e) => {
              settime(e.target.value);
            }}
            lable="Hora"
          ></Input>
          <button data-cy='button-filter' type="submit">Buscar</button>
        </form>
      </PageHeader>
      <main>
        {teachers.length >= 1 ? (
          teachers.map((t: any) => {
            return <TeacherItem key={t.id} teacher={t} />;
          })
        ) : (
          <p className="aviso">
            Selecone filtros para aparecer os professores disponiveis
          </p>
        )}
      </main>
    </div>
  );
};

export default TeacherList;
