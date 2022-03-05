import Card from "./Card";

const Project=()=>{
    return(

        <section id="projects">
        <h2 class="text-important">Projects</h2>
<div style={ {display:"flex",paddingLeft:"100px"} } >
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         </div>
      </section>


    );
}

export default Project;
