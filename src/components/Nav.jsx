import '../assets/css/Desc.css';

const Nav = () => {

    return(
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Liste des jeux</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Deconnéxion</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
} 

export default Nav;