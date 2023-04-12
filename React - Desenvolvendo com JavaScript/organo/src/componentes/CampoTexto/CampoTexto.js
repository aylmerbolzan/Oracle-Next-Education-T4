import "./CampoTexto.css";

export const CampoTexto = (props) => {
  return (
    <div>
      <div className="campo-texto">
        <label>{props.label}</label>
        <input required={props.obrigatorio} placeholder={props.placeholder} />
      </div>
    </div>
  );
};
