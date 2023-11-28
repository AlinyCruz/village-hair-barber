import '../App.css';

const SectionWithDivider = ({ isLastSection }) => {
  const sectionStyle = {
    position: 'relative',
    padding: '20px',
  };

  const hrStyle = {
    width: '70%',
    margin: '0 auto',
    border: 'none',
    height: '2px',
    backgroundColor: '#007bff',
    position: 'absolute',
    left: 0,
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  };

  return (
    <div style={sectionStyle}>
      {/* Conteúdo da seção */}
      {isLastSection ? null : <hr style={hrStyle} />}
    </div>
  );
};

export default SectionWithDivider;
