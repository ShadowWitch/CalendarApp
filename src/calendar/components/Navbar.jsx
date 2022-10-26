
export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
        <span className="navbar-brand">
            <i className="fas fa-calendar-alt"></i>
            &nbsp; {/* &nbsp es para hacer una pequenia separacion nada mas... */}
            Fernando
        </span>

        <button className="btn btn-danger">
            <i className="fas fa-sign-out-alt"></i>
            <span>Salir</span>
        </button>
        
    </div>
  )
}
