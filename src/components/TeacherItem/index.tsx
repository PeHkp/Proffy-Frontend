import React from "react";
import "./styles.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import api from './../../services/api';

interface TeacherItemProps {
  teacher: {
    name: string;
    avatar: string;
    bio: string;
    cost: number;
    subject: string;
    whatsapp: string;
    id: number;
  };
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

  function handleCreateConnections() {
    api.post("connectios",{
      user_id : teacher.id
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Preço/hora <strong>R$ {teacher.cost},00</strong>
        </p>
        <a onClick={handleCreateConnections}
          target="blank"
          href={`https://wa.me/+55${teacher.whatsapp}?text=Olá professor ${teacher.name}, encontrei seu perfil no Proffy e vi que voce da aula de ${teacher.subject}. Podemos agendar uma aula ?`}
        >
          <img src={whatsappIcon} alt="WhatsApp" />
          Entre Em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
