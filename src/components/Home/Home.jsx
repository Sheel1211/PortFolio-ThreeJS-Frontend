import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import moonImage from "../../Images/moon.jpg";
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space.jpg";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";  // so that we can see idhar udhar of moon
import Typography from "@mui/material/Typography";
import TimeLine from "../TimeLine/TimeLine";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import YoutubeCard from "../YoutubeCard/YoutubeCard";
import { MouseOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Home = ({ timelines, youtube, skills }) => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene(); //T create a new scene
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    ); //To set the camera to cover 75degree field of view and cover distance between 0.1 and 1000
    camera.position.set(4, 4, 8);
    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas }); //To render a new scene
    // const geometry = new THREE.BoxGeometry(1, 1, 1);// for cube.... Here its used for demo purpose , we need sphere for our task

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture }); //Hex colors are used.
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture }); //Hex colors are used.
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    scene.background = spaceTexture;

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(8, 5, 5);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.2);
    pointLight2.position.set(-8, -5, -5); //to set dim light on back side of moon.

    // const lightHelper = new THREE.PointLightHelper(pointLight);   // To see the position of the light.

    // const controls = new OrbitControls(camera, renderer.domElement);

    //MeshStandard Material responds to light so it seems black when background is black  , so we use point light to focus on our object.

    //If we don't set position of any object then by default it will be at (0,0,0);

    scene.add(moon); // By default the position of mesh is same as camera i.e camera is put inside cube at the beginning.
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    // scene.add(lightHelper);

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }
      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }
    });

    const animate = () => {
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      requestAnimationFrame(animate); //This function calls itself again and again which performs the work of animation.
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };
    animate();

    return window.addEventListener("scroll", (e) => {
      camera.rotation.y = window.scrollY * 0.003;
      camera.rotation.z = window.scrollY * 0.001;

      const skillsBox = document.getElementById("homeskillsBox");

      if (window.scrollY > 1500) {
        skillsBox.style.animationName = "homeskillsBoxAnimationOn";
      } else {
        skillsBox.style.animationName = "homeskillsBoxAnimationOff";
      }
    });
  }, []); // We will write 3js code in useEffect as it renders only once.

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>S</p>
          <p>H</p>
          <p>E</p>
          <p>E</p>
          <p>L</p>
        </Typography>
        <div className="homeCanvasBox">
          <Typography variant="h2">DESIGNER</Typography>
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">STUDENT</Typography>
          <Typography variant="h2">COMPETITIVE-PROGRAMMER</Typography>
        </div>

        <Link to="https://drive.google.com/file/d/1LxHjO0y--cp0gRKCB5agYYm819jeNBLd/view?usp=drive_link">DOWNLOAD RESUME</Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>
      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={timelines}></TimeLine>
      </div>
      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={skills.image1.url} alt="Face1" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={skills.image2.url} alt="Face2" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={skills.image3.url} alt="Face3" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={skills.image4.url} alt="Face4" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={skills.image5.url} alt="Face5" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={skills.image6.url} alt="Face6" />
          </div>
        </div>

        <div className="cubeShadow"></div>
        <div className="homeskillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiReact />
          <SiJavascript />
          <SiMongodb />
          <SiNodedotjs />
          <SiExpress />
          <SiCss3 />
          <SiHtml5 />
          <SiThreedotjs />
        </div>
      </div>

      <div className="homeYoutube">
        <Typography variant="h3">CERTIFICATES AND ACHIEVEMENTS</Typography>
        <div className="homeYoutubeWrapper">
          {youtube.map((item) => (
            <YoutubeCard
              image={item.image.url}
              title={item.title}
              url={item.url}
              id={item._id}
              key={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
// Perspective camera is the camera like which our eyes see

//In typography if we don't give variant then default is p tag.
