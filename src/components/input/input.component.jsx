import './input.component.scss';
const Input = ({ label, description, ...otherProps }) => (
    <div className="form-group">
      <input {...otherProps} />
      {description && <small className="form-description">{description}</small>}
    </div>
  );

  export default Input