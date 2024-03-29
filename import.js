function navbar(){
    return `<div>
    <a href="discover.html"><p>Discover</p></a>
    
    <a href="start.html"><p>Start a project</p></a>
    
</div>

<div>
<a href="index.html">
<img src="data:image/png;base64,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" 
 alt="">
</a>
</div>



<div>
    <p>search  <i class="fa-solid fa-magnifying-glass"></i> </p>
    <a href="signup.html"><p>Log in</p></a>
    
</div>



</div>

`
}

function navbar2(){
    return `<div>
    <a href="https://www.kickstarter.com/arts?ref=section-homepage-nav-click-arts">

        <p>Arts</p>

    </a>

    <a href="https://www.kickstarter.com/comics-illustration?ref=section-arts-nav-click-comics-illustration">
        <p>Comics & illustration</p>
    </a>
    <a href="https://www.kickstarter.com/design-tech?ref=section-comics-illustration-nav-click-design-tech">
        <p> Design & Tech</p>
    </a>
    <a href="https://www.kickstarter.com/film?ref=section-design-tech-nav-click-film">
        <p>Film</p>
    </a>
    <a href="https://www.kickstarter.com/food-craft?ref=section-film-nav-click-food-craft">
        <p>food & craft</p>
    </a>
    <a href="https://www.kickstarter.com/games?ref=section-food-craft-nav-click-games">
        <p>
            Games 
        </p>
    </a>
    <a href="https://www.kickstarter.com/music?ref=section-games-nav-click-music">
        
    <p>music</p>
    </a>
    <a href="https://www.kickstarter.com/publishing?ref=section-music-nav-click-publishing">
        <p>Publishing</p>
    </a>
   
   
    
   
   
  
</div>`
}

function footer(){
    return `    <div>
    <div id="sources">

        <div>
            <a href="https://www.kickstarter.com/arts?ref=section-homepage-nav-click-arts">
    
                <p>Arts</p>
    
            </a>
    
            <a href="https://www.kickstarter.com/comics-illustration?ref=section-arts-nav-click-comics-illustration">
                <p>Comics & illustration</p>
            </a>
            <a href="https://www.kickstarter.com/design-tech?ref=section-comics-illustration-nav-click-design-tech">
                <p> Design & Tech</p>
            </a>
            <a href="https://www.kickstarter.com/film?ref=section-design-tech-nav-click-film">
                <p>Film</p>
            </a>
            <a href="https://www.kickstarter.com/food-craft?ref=section-film-nav-click-food-craft">
                <p>food & craft</p>
            </a>
            <a href="https://www.kickstarter.com/games?ref=section-food-craft-nav-click-games">
                <p>
                    Games 
                </p>
            </a>
            <a href="https://www.kickstarter.com/music?ref=section-games-nav-click-music">
                
            <p>music</p>
            </a>
            <a href="https://www.kickstarter.com/publishing?ref=section-music-nav-click-publishing">
                <p>Publishing</p>
            </a>
           
           
            
           
           
          
        </div>
    
    </div>


<!-- footer -->


<div id="footer">

<div id="footer-1">

<div>
    <h3>ABOUT</h3>
<a href="https://www.kickstarter.com/about?ref=global-footer"><p>About us</p></a>
<a href=""><p>
    Our charter 
</p></a>
<a href="https://www.kickstarter.com/charter?ref=global-footer"><p>Stats</p></a>
<a href="https://www.kickstarter.com/press?ref=global-footer"><p>Press</p></a>
<a href="https://jobs.kickstarter.com/"><p>Jobs</p></a>

</div>



<div>
    <h3>SUPPORT</h3>
<a href="https://help.kickstarter.com/hc/en-us"><p>Help Center</p></a>
<a href=""><p>
    Our Rules

</p></a>
<a href="https://www.kickstarter.com/rules?ref=global-footer"><p>Creator Resources</p></a>
<a href="https://www.kickstarter.com/forward-funds?ref=global-footer"><p>Forward Funds</p></a>
<a href="https://www.kickstarter.com/help/brand_assets?ref=global-footer"><p>Brand assets</p></a>
</div>




<div>
    <h3>MORE FROM KICKSTARTER</h3>
<a href="https://www.kickstarter.com/newsletters?ref=global-footer"><p>Newsletters</p></a>
<a href="https://www.kickstarter.com/magazine?ref=global-footer"><p>
    Kickstarter Magazine
</p></a>
<a href="https://thecreativeindependent.com/?ref=global-footer"><p>The Creative Independent</p></a>
<a href="https://www.kickstarter.com/blog?ref=global-footer"><p>The Kickstarter Blog</p></a>
<a href="https://www.kickstarter.com/mobile?ref=global-footer"><p>Mobile apps</p></a>
<a href="https://www.kickstarter.com/research?ref=global-footer"><p>Research</p></a>

</div>


</div>


<div id="footer-2">

<div>
    <i class="fa-brands fa-kickstarter"></i><span>Kickstarter, PBC © 2022</span>
</div>


<div>
    <a href="https://www.facebook.com/Kickstarter/"><i class="fa-brands fa-facebook"></i></a>
    <a href="https://www.instagram.com/kickstarter/"><i class="fa-brands fa-instagram"></i></a>
    <a href="https://twitter.com/kickstarter"><i class="fa-brands fa-twitter"></i></a>
    <a href="https://www.youtube.com/user/kickstarter"><i class="fa-brands fa-youtube"></i></a>
</div>


<div>
    <select name="" id="">
        <option value="">English</option>
        <option value="">deutsch</option>
        <option value="">Francis</option>
        <option value="">italiano</option>
        
    </select>


    <select name="" id="">
        <option value="">$ US Dollar(USD)</option>
        <option value="">$ Singapore Dollar(SGD)</option>
        <option value="">$ Canadian Dollar(CAD)</option>
        <option value="">$ Australian Dollar(AUD)</option>
        
    </select>

</div>


</div>


</div>



<div id="final">

    <div>
        <a href="https://www.kickstarter.com/trust?ref=global-footer">

            <p>Trust & Safety</p>

        </a>

        <a href="https://www.kickstarter.com/terms-of-use?ref=global-footer">
            <p>Terms of Use</p>
        </a>
        <a href="https://www.kickstarter.com/privacy?ref=global-footer">
            <p>
                Privacy Policy </p>
        </a>
        <a href="https://www.kickstarter.com/cookies?ref=global-footer">
            <p>Cookie Policy</p>
        </a>
        <a href="https://www.kickstarter.com/accessibility?ref=global-footer">
            <p>Accessibility Statement</p>
        </a>
        <a href="https://www.kickstarter.com/privacy?ref=global-footer#privacy-information-for-california-residents">
            <p>
                CA Notice of Consent
            </p>
        </a>
       
       
       
        
       
       
      
    </div>

</div>
</div>`
}
export { navbar, navbar2, footer };