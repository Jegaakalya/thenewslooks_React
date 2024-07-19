
import './App.css'; 
import MainPage from './components/MainPage/MainPage';
import TopNavBar from './components/Top_Nav_Bar/Top_Nav_Bar';
import { DataProvider } from './context/MainContext';
import { Route, Routes  } from 'react-router-dom';

function App() {
  let catagery= [
    {
     id:"1",
     name:"தமிழ்நாடு",
     toppost:[
      {id:1,
      image:"https://wallpapers.com/images/featured/iron-man-superhero-ponky3hlfivddo2m.jpg",
      title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
      {id:2,
        image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
        title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
      {id:3,
        image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
        title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
      {id:4,
        image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
        title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
      {id:5,
        image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
        title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."}
     ]
    },
    {
        id:"2",
        name:"புதுச்சேரி",
        toppost:[
          {id:1,
          image:"https://wallpapers.com/images/featured/iron-man-superhero-ponky3hlfivddo2m.jpg",
          title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
          {id:2,
            image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
            title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
          {id:3,
            image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
            title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
          {id:4,
            image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
            title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
          {id:5,
            image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
            title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."}
         ]
    },
    {
        id:"3",
        name:"புதுச்சேரி",
        toppost:[
          {id:1,
          image:"https://wallpapers.com/images/featured/iron-man-superhero-ponky3hlfivddo2m.jpg",
          title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
          {id:2,
            image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
            title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
          {id:3,
            image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
            title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
          {id:4,
            image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
            title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
            {id:5,
              image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
              title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."}
         ]
    },
    {
        id:"4",
        name:"புதுச்சேரி",
        toppost:[
          {id:1,
          image:"https://wallpapers.com/images/featured/iron-man-superhero-ponky3hlfivddo2m.jpg",
          title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
          {id:2,
            image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
            title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
          {id:3,
            image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
            title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
          {id:4,
            image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
            title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
          {id:5,
            image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
            title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."}
         ]
    },
    {
        id:"5",
        name:"புதுச்சேரி",
        toppost:[
          {id:1,
          image:"https://wallpapers.com/images/featured/iron-man-superhero-ponky3hlfivddo2m.jpg",
          title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
          {id:2,
            image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
            title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
          {id:3,
            image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
            title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
          {id:4,
            image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
            title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
          {id:5,
            image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
            title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."}
         ]
    },
    {
        id:"6",
        name:"புதுச்சேரி",
        toppost:[
          {id:1,
          image:"https://wallpapers.com/images/featured/iron-man-superhero-ponky3hlfivddo2m.jpg",
          title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
          {id:2,
            image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
            title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
          {id:3,
            image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
            title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
          {id:4,
            image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
            title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
          {id:5,
            image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
            title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."}
         ]
    },
    {
    id:"7",
    name:"தமிழ்நாடு",
    toppost:[
      {id:1,
      image:"https://wallpapers.com/images/featured/iron-man-superhero-ponky3hlfivddo2m.jpg",
      title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
      {id:2,
        image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
        title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
      {id:3,
        image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
        title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
      {id:4,
        image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
        title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
      {id:5,
        image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
        title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."}
     ]
    },
    {
    id:"8",
    name:"தமிழ்நாடு",
    toppost:[
      {id:1,
      image:"https://wallpapers.com/images/featured/iron-man-superhero-ponky3hlfivddo2m.jpg",
      title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
      {id:2,
        image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
        title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
      {id:3,
        image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
        title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
      {id:4,
        image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
        title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
      {id:5,
        image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
        title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."}
     ]
    },
    {
    id:"9",
    name:"தமிழ்நாடு",
    toppost:[
      {id:1,
      image:"https://wallpapers.com/images/featured/iron-man-superhero-ponky3hlfivddo2m.jpg",
      title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
      {id:2,
        image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
        title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
      {id:3,
        image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
        title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
      {id:4,
        image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
        title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
      {id:5,
        image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
        title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."}
     ]
    },
    {
    id:"11",
    name:"தமிழ்நாடு",
    toppost:[
      {id:1,
      image:"https://wallpapers.com/images/featured/iron-man-superhero-ponky3hlfivddo2m.jpg",
      title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
      {id:2,
        image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
        title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
      {id:3,
        image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
        title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."},
      {id:4,
        image:"https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
        title:"அமைச்சர் மகேஷ் தொகுதியில் 6 மாதமாக திறக்கப்படாமல் இருக்கும் ஆரம்ப."}
     ]
    },
    {
    id:"11",
    name:"தமிழ்நாடு"
    },
    {
    id:"11",
    name:"தமிழ்நாடு"
    },
    {
    id:"11",
    name:"தமிழ்நாடு"
    },
    {
        id:"11",
        name:"தமிழ்நாடு"
        },


    
]
  return (
    <div className="overflow-x-hidden">
      <DataProvider> 
        <TopNavBar catagery={catagery}/>
        <Routes>
          <Route path="/" element={<MainPage catagery={catagery}/>} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
