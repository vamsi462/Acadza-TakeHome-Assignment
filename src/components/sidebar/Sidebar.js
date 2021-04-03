import './Sidebar.css'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
        <i className="fa fa-cog"></i>
          <h1>ACADZA</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link">
       <i className="fa fa-clipboard"></i>
          <a href="/">Dashboard</a>
        </div>
        <div className="sidebar__link">
         <i class="bi bi-file-earmark-x"></i>
          <a href="/">Backlog Remover</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="/">Rank Up</a>
        </div>
        <div className="sidebar__link">
         <i class="bi bi-speedometer2"></i>
          <a href="/">Speed Up</a>
        </div>
        <div className="sidebar__link active_menu_link">
          <i class="bi bi-shield-fill-check"></i>
          <a href="/">Accuracy Up</a>
        </div>
        <div className="sidebar__link">
         <i class="bi bi-arrow-counterclockwise"></i>
          <a href="/">Revision</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="/">Test Creator</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-sign-out"></i>
          <a href="/">Assignment Creator</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-calendar-check-o"></i>
          <a href="/">Study Material</a>
        </div>
        <div className="sidebar__link">
         <i class="bi bi-code-square"></i>
          <a href="/">Formula Sheet</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;