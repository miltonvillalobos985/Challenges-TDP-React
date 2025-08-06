import '../App.css';
import Hgroup from './components/Hgroup';
import Nav from './components/Nav/indes';
import Header from './components/Header';

const response = {
  series: "Challenge 1",
  title: "New York",
  mainNav: [
    {
      text: 'one',
      url: '#'
    },
    {
      text: 'two',
      url: '#'
    },
    {
      text: 'three',
      url: '#'
    },
    {
      text: 'four',
      url: '#'
    },
    {
      text: 'five',
      url: '#'
    }
  ],
  subNav: [],
  mainImg: "",
  footerText: ""
}

function App() {
  return (
    <>
      <Header>
        <Hgroup series={response.series} title={response.title}></Hgroup>
        <Nav links={response.mainNav}> </Nav>
        <ul>
          <li><a href="#">Lorem ipsum2</a></li>
          <li><a href="#">Lorem ipsum3</a></li>
        </ul>
      </Header>
      <main>
       <img src='https://images.unsplash.com/photo-1541336032412-2048a678540d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D'/>
      </main>
      <footer>
        <blockquote>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </blockquote>
      </footer>
    </>

  );
}

export default App;
