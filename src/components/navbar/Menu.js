import classes from "./Styles/Menu.module.css";

export default function Menu() {
  return (
    <div>
      <ul className={classes.menuBar}>
        <li
          onMouseOver={(e) => {
            e.target.nextSibling.style.display = 'block';
            console.dir(e.target.nextSibling.style)
          }}
          onMouseOut={(e) => e.target.nextSibling.style.display = 'none'}
          className={classes.menuItem}
        >
          <span className="material-symbols-outlined">home</span>
          <span
            className={classes.menuName}
          >
            Home
          </span>
        </li>
        <li
          onMouseOver={(e) => e.target.nextSibling.style.display = 'block'}
          onMouseOut={(e) => e.target.nextSibling.style.display = 'none'}
          className={classes.menuItem}
        >
          <span className="material-symbols-outlined">person</span>
          <span
            className={classes.menuName}
          >
            About
          </span>
        </li>
        <li
          onMouseOver={(e) => e.target.nextSibling.style.display = 'block'}
          onMouseOut={(e) => e.target.nextSibling.style.display = 'none'}
          className={classes.menuItem}
        >
          <span className="material-symbols-outlined">design_services</span>
          <span
            className={classes.menuName}
          >
            Services
          </span>
        </li>
        <li
          onMouseOver={(e) => e.target.nextSibling.style.display = 'block'}
          onMouseOut={(e) => e.target.nextSibling.style.display = 'none'}
          className={classes.menuItem}
        >
          <span className="material-symbols-outlined">school</span>
          <span
            className={classes.menuName}
          >
            Skills
          </span>
        </li>
        <li
          onMouseOver={(e) => e.target.nextSibling.style.display = 'block'}
          onMouseOut={(e) => e.target.nextSibling.style.display = 'none'}
          className={classes.menuItem}
        >
          <span className="material-symbols-outlined">task</span>
          <span
            className={classes.menuName}
          >
            Portfolio
          </span>
        </li>
        <li
          onMouseOver={(e) => e.target.nextSibling.style.display = 'block'}
          onMouseOut={(e) => e.target.nextSibling.style.display = 'none'}
          className={classes.menuItem}
        >
          <span className="material-symbols-outlined">history_edu</span>
          <span
            className={classes.menuName}
          >
            Blogs
          </span>
        </li>
        <li
          onMouseOver={(e) => e.target.nextSibling.style.display = 'block'}
          onMouseOut={(e) => e.target.nextSibling.style.display = 'none'}
          className={classes.menuItem}
        >
          <span className="material-symbols-outlined">contacts</span>
          <span
            className={classes.menuName}
          >
            Contacts
          </span>
        </li>
      </ul>
    </div>
  );
}
