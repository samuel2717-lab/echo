import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MyImage from './composant/MyImage'
import de from "./assets/video.jpg"
import dea from "./assets/video.jpg"
import deb from "./assets/video.jpg"
import { itMatchesOne } from 'daisyui/src/lib/postcss-prefixer/utils'

export default function Home() {
  const tim = [
    {
      name: de
    },
    {
      name: dea
    },
    {
      name: deb
    },
  ]
  return (
 <div className="">
 <div class="navbar bg-base-100 shadow-lg min-w-screen rounded">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li><a>Acceuil</a></li>
      <li><a>Nos Services</a></li>
      <li><a>Contacts</a></li>
      <li><a>Partenaires</a></li>
      <li><a>Gallerie</a></li>
    </ul>
  </div>
</div>

<div class="carousel w-[95%] h-['480px] mx-5  my-8  rounded-lg">
  <div id="slide1" class="carousel-item relative w-full ">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" class="w-full "/> 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" class="w-full"/> 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" class="w-full"/> 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" class="w-full"/> 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>

<div class="mt-[7rem] ">
  <div class="mt-6 flex flex-col items-center justify-start  "><p class="text-4xl">Nos Valeurs</p></div>
  <div class="grid grid-cols-3 gap-3 mt-9 flex items-stretch">

   <div><p class="text-center text-3xl">la Rapidité</p>
   <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée 
     à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
     le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
      Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</p>
   </div>
  <div><p class="text-center text-3xl">la flexibilité</p>
  <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée 
     à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
     le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
      Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</p>
  </div>
  <div><p class="text-center text-3xl">le respect</p>
  <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée 
     à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
     le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
      Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</p>
  </div>
  </div>
</div>




<div>
  <div class="mt-6 flex flex-col items-center justify-start mt-[7rem] "><p class="text-4xl">Nos Services</p></div>
  <div class="grid grid-cols-3 gap-3 mt-9 flex items-stretch">

   <div class=""><p class="text-center text-3xl">Gardiennage</p>
   <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée 
     à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
     le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
      Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</p>
   </div>

  <div class="col-span-2 ">

      <Image src={de}  width={1200} height={500}/>

  </div>
  
  </div>
  


  <div class="grid grid-cols-3 gap-3 mt-9 flex items-stretch">

<div class="col-span-2 ">

   <Image src={de}  width={1200} height={500}/>

</div>

<div class=""><p class="text-center text-3xl">Evenementiel</p>
<p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée 
  à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
  le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
   Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</p>
   <div class="mt-9"><button class="btn btn-outline btn-primary">Consulter</button></div>
</div>



</div>

</div>



 </div>
 
  )
}
