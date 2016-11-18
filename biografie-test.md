---
layout: page
title: Autorisierte Biografie
permalink: /biografie-test/
---

<div class="o-media u-margin-bottom">
    <div class="o-media__img u-1/3">
        <img class="u-img" src="/assets/img/doss-autorisierte-biografie.jpg" alt="Die autorisierte Biografie von Desmond Doss">
    </div>
    <div class="o-media__body c-book">
        <h2 class="c-book__title">Der Held von Hacksaw Ridge</h2>
        <h3 class="c-book__subtitle">Die autorisierte Biografie von Desmond Doss</h3>
        <p class="c-book__description">Desmonds dramatische, wahre Geschichte der Integrität, der Erlösung und des Heldentums wird auch Sie inspirieren, mutig nach Ihren Überzeugungen zu leben.</p>
        <p>Ab dem 20.12.2016 auf Deutsch!</p>
        <p class="c-book__price">EUR <span>7,95</span></p>
        <button id="showForm1" class="c-btn c-btn--primary c-btn--ghost">Bestellformular anzeigen</button>
        <!-- <div class="o-box o-box--small"> -->
            <form id="Form1" class="c-form c-book__form" name="bestellung" action="danke" netlify>
                <div class="o-layout c-form__row">
                    <div class="o-layout__item u-1/3">
                        <div class="c-form__smallprint">
                            Versand ab dem 20.12.2016
                        </div>
                        <label for="amount">Anzahl</label>
                        <input id="amount" class="c-form__input c-form__input--inline" type="number" name="Anzahl" value="1" style="width: 42px;">
                        <br><span class="c-form__price">7,90 Euro (calculate me!)</span>
                    </div>
                    <div class="o-layout__item u-2/3">
                        Staffelpreise:
                        <ul>
                            <li>1 Stk.: 7,95 Euro</li>
                            <li>10 Stk.: 3,00 Euro/Stück</li>
                            <li>50 Stk.: 2,00 Euro/Stück</li>
                            <li>100 Stk.: 1,50 Euro/Stück</li>
                            <li>500 Stk.: 1,25 Euro/Stück</li>
                            <li>1000 Stk.: 1,00 Euro/Stück</li>
                        </ul>
                    </div>
                </div>
                <div class="c-form__row">
                    <label for="name">Vor- und Nachname</label>
                    <input id="name" class="c-form__input" type="text" name="Name">
                </div>
                <div class="c-form__row">
                    <label for="mail">E-Mail</label>
                    <input id="mail" class="c-form__input" type="email" name="Email">
                </div>
                <div class="o-layout c-form__row">
                    <div class="o-layout__item u-1/2">
                        <label for="street">Straße und Hausnummer</label>
                        <input class="c-form__input" id="street" type="text" name="Straße und Hausnummer">
                    </div>
                    <div class="o-layout__item u-1/2">
                        <label for="city">Stadt</label>
                        <input class="c-form__input" id="city" type="text" name="Stadt">
                    </div>
                    <div class="o-layout__item u-1/2">
                        <label for="zip">Postleitzahl</label>
                        <input class="c-form__input" id="zip" type="text" name="Postleitzahl">
                    </div>
                    <div class="o-layout__item u-1/2">
                        <label for="country">Land</label>
                        <select id="country" class="c-form__input" name="Land">
                            <option value="de">Deutschland</option>
                            <option value="at">Österreich</option>
                            <option value="ch">Schweiz</option>
                        </select>
                    </div>
                </div>
                <div class="c-form__row">
                    <label for="tel">Telefonnummer für Rückfragen</label>
                    <input id="tel" class="c-form__input" type="text" name="Telefonnummer" maxlength="20">
                </div>
                <div class="c-form__row">
                    <button class="c-btn c-btn--primary c-btn--ghost c-btn--small" type="submit">Bestellung absenden</button>
                    <div class="c-form__smallprint">
                        Mit dem klicken auf "Bestellung absenden" werden ihre Bestelldaten an Memento Medien e.V. weitergeleitet und Sie erhalten eine Bestellbestätigung. Die Details für den Zahlungsverkehr erhalten Sie per E-Mail. Zahlung und Versand werden durch Memento Medien e.V. abgewickelt.
                    </div>
                </div>
            </form>
        <!-- </div> -->
    </div>
</div>



