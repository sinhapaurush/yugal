const navigation = () => {
  return (
      `
      <style>
      ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background-color: #333;
        }
        
        li {
          float: left;
          border-right:1px solid #bbb;
        }
        
        li:last-child {
          border-right: none;
        }
        
        li a {
          display: block;
          color: white;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
        }
        
        li a:hover:not(.active) {
          background-color: #111;
        }
        
        .active {
          background-color: #04AA6D;
        }
      </style>
      <ul>
          <li><a class="active" onclick="gts(home)">Home</a></li>
          <li><a onclick="gts(about)">About</a></li>
      </ul>`
  );
}
const home = screen(
  `Home Page`,
  ``,

  `
  ${navigation()}
  HOME PAGE`
);

const about = screen(
  `About Screen`,
  ``,
  `
  ${navigation()}
  HELLO BRO!
  `
);

// LOAD BY DEFAULT
gts(home);