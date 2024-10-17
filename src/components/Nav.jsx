

import  miImagen from '../assets/search_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import miImagen2 from '../assets/public_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import miImagen3 from '../assets/music_note_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import miImagen4 from '../assets/newspaper_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import miImagen5 from '../assets/favorite_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import miImagen6 from '../assets/av_timer_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import miImagen7 from '../assets/album_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import miImagenS from '../assets/genres_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
export const Nav= ()=>{

    return (
     <>
     <div className='navGeneral'>
     <div className='tituloApp'>
     <img className='im' src={miImagenS}/>   
     <h2 className="titulo">Music APP</h2>
     </div>
     <p className="subtitulo">discover the new</p>

    
     <nav class="sidebar-menu">
  <h3 className='Ex'>Explore Music</h3>
  <ul>
    <li>
      <a href="#">
        <img src={miImagen}></img>
        <i class="fas fa-search"></i>
        <span>Search</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fas fa-music"></i>
        <img src={miImagen2}></img>
        <span>Discover Music</span>
      </a>
    </li>
    <li>
      <a href="#">
        <img src={miImagen3}/>
        <i class="fas fa-newspaper"></i>
        <span>Artist</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fas fa-users"></i>
        <img src={miImagen4}/>
        <span>News</span>
      </a>
    </li>
  </ul>
</nav>

<nav className='sidebar-menu'>
<h3 className='Ex'>Tu Musica</h3>
<ul>
    <li>
        <a href='#'>
            <img src={miImagen5}/>
            <span>Favorites</span>
        </a>
    </li>

    <li>
        <a href='#'>
            <img src={miImagen6}/>
            <span>Historial</span>
        </a>
    </li>

    <li>
        <a href='#'>
            <img src={miImagen7}/>
            <span>Playlist</span>
        </a>
    </li>
</ul>
</nav>

</div>
    
        
        </>
    )
}