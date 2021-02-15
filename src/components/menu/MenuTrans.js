import React from 'react'
import './style.css'

export const MenuTrans = () => {

    return (
      
        <>  

        
  <header class="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <a class="navbar-brand" href="/">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/">Action</a>
              <a class="dropdown-item" href="/">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="/">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="/">Disabled</a>
          </li>
        </ul>
        
      </div>
    </nav>
  </header>

  <section id="hero">
    <div className="h-txt text-dark"> 
      <div className="starter-template">
        <h1>Hero Section</h1>
        <p className="lead">Estamos probando texto sobre imagen de fondo</p>
        <a href="/" className="btn btn-primary">Button</a>
        <a href="/" className="btn btn-primary ml-3">Button</a>
      </div>
    </div>

  </section>
  {/* <script>
    $(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop()>600)
    });

</script> */}
            
            
        </>
    )
}
