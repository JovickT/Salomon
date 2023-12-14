import '../assets/css/Desc.css';
import Nav from './Nav';


const Desc = () => {
    return (
        <>
        <Nav/>
        <div class="Desc">
            <br /><br />
            <h1 class="d-flex justify-content-center">Description des jeux vidéos.</h1>
            <br /><br />
            <div class="card" style={{width: "15rem", marginLeft:"43%"}}>
                <img  src="https://cdn1.epicgames.com/offer/4750c68b2bfa4f43933b81cfd5cc510c/EGS_EASPORTSFC24UltimateEdition_EACanada_Editions_S2_1200x1600-dc25e6d71666959d43074b7ed2868ad7" alt="fc 24"  class="card-img-top" style={{width : "15rem"}} />
                    <div class="card-body">
                    <h5 class="card-title">FC 24</h5>
                    <p class="card-text" style={{fontSize: "0.8rem"}}>EA Sports FC 24 est un jeu vidéo de football développé par Electronic Arts et édité par EA Sports, sorti le 29 septembre 2023 sur Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series et Nintendo Switch.</p>
                    <a href="/" class="btn btn-primary">S'inscire au tournoi</a>
                    </div>
            </div>
            <br />
        </div>
        
        </>
    );
};

export default Desc;