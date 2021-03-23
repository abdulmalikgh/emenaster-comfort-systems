import React from 'react'

export default function Main() {
    return (
        <main id="main_container"> 
            <div class='main__card__wrapper'>
                <div class=" main__card">
                    <div class='card__image'>
                        <img height="120" src="./assets/appointments.svg" />
                    </div>
                    <div class="card__button">
                        <button type="button" class="draw-border" data-toggle="modal" data-target="#exampleModal">
                            Service Request
                        </button>
                    </div>
                </div>
                <div class=" main__card">
                    <div class='card__image'>
                        <img height="120" src="./assets/schedule.svg" />
                    </div>
                    <div class="card__button">
                        <button class="draw-border">
                            My Bookings
                        </button>
                    </div>
                </div>
                <div class=" main__card">
                    <div class='card__image'>
                        <img height="120" src="./assets/contactimage.svg" />
                    </div>
                    <div class="card__button draw-border">
                        <button class="draw-border">
                            Contact Us
                        </button>
                    </div>
                </div>
        </div>
    </main>
    )
}
