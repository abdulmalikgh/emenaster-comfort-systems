import React from 'react'

export default function AppNav() {
    return (
        <>
            <nav id="app_nav_bar" class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="./index.html">
                <img src="./logsmall.png" height="60"/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <img src="./assets/menu.svg" height="40" />
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Book Request</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
    
            </div>
        </nav>
        </>
    )
}
