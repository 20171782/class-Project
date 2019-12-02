<template>
<div class="top uk-container">
    <div class="uk-child-width-1-4@m" uk-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: false" uk-grid>
        <div>
            <div class="uk-card " uk-scrollspy-class="uk-animation-slide-top">
                <div class="uk-card-media-top">
                    <img src="data:image/png;base64,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" alt="">
                </div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">Plane</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
<!--                    <button class="uk-button uk-button-primary">Primary</button>-->


                    <button class="uk-button"><a  href="#plane" uk-toggle>Open</a></button>

                    <div id="plane" class="uk-modal-full" uk-modal>
                        <div class="uk-modal-dialog">
                            <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
                            <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
                                <div class="uk-background-cover" style="background-image: url('https://cdn.pixabay.com/photo/2017/11/01/17/30/airline-2908745__340.png');" uk-height-viewport></div>
                                <div class="uk-padding-large">
                                    <h1>Plane</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>






        <div>
            <div class="uk-card ">
                <div class="uk-card-media-top">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAADVCAMAAACMuod9AAAA3lBMVEX///959R50c3O+vr45Nzf6q6sAAAB0anZt9AB5+Bv5/vZ30T5oZ2fw8PB29RWR91N0cHR5+xZ1lGOwsLBvbW3a2tqKiYn5+fn/sbHk/daSkZEgKyszMTHi4uL66elucXH/paUtKyvQ0NAmJibq6urExMS2trZLSUnbmJifnp6np6cbGBh5eXmEhITKlJRXVlZiYGA/PT24goLto6NnUVFLQUEXExPR+7ue92rw/ujo/9qlwJW1+o+5jY2Je3t2sFSfg4N2u053zEOohoafcnKIZWXWlJRjTk55W1tPT0+zzj07AAAGA0lEQVR4nO2cC3vaNhSGFWNOs82sTZExBXkMbO6m4NKw7pLu1nTl//+hSbYJNxPAAcQD3/s0TR4jTs7rI8nCiDAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAMfn+kOiW2cIvN7cH5ZNuoed4d3tzWG5f61Z6hk8/Htj25vZX3U6beX1423e6nTYDW9jCFrawPR9gC1vYwvbqbH/T7bSZw9ve/V58jlbjsmzfvuHPYVn6fI9iazyPPl0dtga/KlvLvSpbG7awhS1sddvyoJSGwS/Rlneb6VT45dnySjOXTrNygbYbXBX84mwHm0orizu4ONuNHVnali7NdvOwjQYubGELW9jCFrawhS1sYXtzjetkI3jGNrg4W97aaNu6vNe3m1/gype3l2fLB63U21KtwQXel1K+qTdXo6M8d3G2z8F564psVY11vM+ny1YO3uY12erQ1Wir4U1rnbaGcVW2vHhNtoblXJPtqYur1/bUe4k02dZmXfm00/Ifh/5k283dDiWtPXxOavvTSW0LN3ffHZS7P19tl/2rPI6qW/v5xLbW3z8ckn/ebpc1au/z+fj7yW3fvDoou0xRT7b5k9tuSinYIe2dWA9Ue8jna6pDn4VtYIyG03Z7OOIvVFaB2irQqvL4Qdn+ewa2AW8LYSqECEcv8A2seaC2tRSopiaps7CdxhnGiDD9jssutJcCtdcer33Wbxuay4iM5eXmKmu/Sv8stZaj1D2MrClWf1ftQbPtamWjLLN05pQ4prnaqNbRaRsMk6EmquLerM7GXbi3a9A254HEU6D26qA48Tp52ZYnaVW/fc2X8+Mv1STl4b621izQY0cG6jzOAq32Za22wyTHD+W8ojy+F+ldcAuz0oqvSaCOSC/uqW2H1hy+LCsZJ9fLkbUf8dOqX2eByp1qUtxlRie+EVdYwPaijP57ks2XP0RZ1itOYR9ycaDHhUCP0QmoF1danlZ2iTjJ6of8AtV4Vt4vULceBeosxBknp+04mWehFyc5Xkiy/DGqSXu/QIPoSWLxrJXjnhwcJ/MsJCVZSvJblHi4X6AgetJ9eTHQfZZOckyOWtto3SJOfsN8M8m4fX8d49btR2of1+fk7n6Bmutz8peo3J6u96nTWLve5uMLZ3/PT8w6/ThQ5ylQcr2d6LzkrFKpx1m+X1lL7TlJMZYsQUVntpZK1lajY2SdlUJ/tk6Wy9vy+Ety68Hb+w0MexbocVxWgZJ18r595Mh0vaQIVfM+nL10EXvOyAqjPg/09GJKWIfP+EUs3aZJ6GdYzDoiJVD9xG/pbcUx17KcZNox4HprgbKctSPjtOtLKYp+xu0RrlgJVD8/WUlpIhZch37WOI7RXwzEz60bJ7hB36sLIereZPiifS82n8wCafyTHttpdgdGUGllrusMp9kNjKCbO6dFBQAAAAAAAAAAAAAAAAAAAAAAAAAAOBzrG0Ma8yNOY6ftQDs2049Nq/umXZpvAipSioa9tgMntdnZoXJ0V4+0FlI3zHnDGTlaCxLUj5PfISkS9VnJY0bFol5AFitVRhSwwGOsRNRTTbxgSkXmeiRYhRyXukqWyBU9aokBC0zmh0TMGzAa6NbZAgWFBgs586g5oVxospBsi1g9YAPyB6qCDvVtb8TIsKnnU4/UHmu3P2o65OUK1JIng1FoNxg1R33dNtsI1QCVNaQck4M3NNTPJWLUcsiqqDKyBtnyeE+KywZtinemy2I3yI2+KFekgmpmeee/CY6T7ZLdIN+X3lSUP7M6d8ltULcYzURd5dnioZy5mowo2mNty1bquPyyyTcm8lCPpp5WkR3wnQIVW6TSzpFjk1skmbfdI0eVNJqXR215RtjIYyNipuiqOsomDhtNGbMmvkfyYd9m1lSdjfOGE00c7rFpW45TKcECUnNTRc46JlFULE/OY77sqEQ+p0Ih6t1ybmuoq5ZsLZ+jHitQidFZfWwiDd+NLh/JP4f1B7660qj/3OSS6kffnbihaiNxC/EFKXn27DEtCtlxSM9fmtRDoXf+8yoAAAAAQGb+B4k35YNGrLlDAAAAAElFTkSuQmCC" alt="">
                </div>
                <div class="uk-card-body" uk-scrollspy-class="uk-animation-slide-top">
                    <h3 class="uk-card-title">truck</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>


                    <button class="uk-button"><a  href="#truck" uk-toggle>Open</a></button>

                    <div id="truck" class="uk-modal-full" uk-modal>
                        <div class="uk-modal-dialog">
                            <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
                            <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
                                <div class="uk-background-cover" style="background-image: url('https://cdn.pixabay.com/photo/2015/01/03/21/05/truck-587819__340.jpg');" uk-height-viewport></div>
                                <div class="uk-padding-large">
                                    <h1>Truck</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div>
            <div class="uk-card ">
                <div class="uk-card-media-top">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLZa3lPPgNve9Gs9_YHPneeDyhUNZnjh-XiZ3temqsXIFxC0Vn&s" alt="">
                </div>
                <div class="uk-card-body"  >
                    <h3 class="uk-card-title">Ship</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

                    <button class="uk-button"><a  href="#ship" uk-toggle>Open</a></button>

                    <div id="ship" class="uk-modal-full" uk-modal>
                        <div class="uk-modal-dialog">
                            <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
                            <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
                                <div class="uk-background-cover" style="background-image: url('https://cdn.pixabay.com/photo/2017/06/24/10/04/container-2437260__340.jpg');" uk-height-viewport></div>
                                <div class="uk-padding-large">
                                    <h1>Headline</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div>
            <div class="uk-card ">
                <div class="uk-card-media-top">
                    <img src="data:image/png;base64,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" alt="">
                </div>
                <div class="uk-card-body" >
                    <h3 class="uk-card-title">Train</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>

                    <button class="uk-button"><a  href="#train" uk-toggle>Open</a></button>

                    <div id="train" class="uk-modal-full" uk-modal>
                        <div class="uk-modal-dialog">
                            <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
                            <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
                                <div class="uk-background-cover" style="background-image: url('https://cdn.pixabay.com/photo/2013/02/16/02/55/japan-82123__340.jpg');" uk-height-viewport></div>
                                <div class="uk-padding-large">
                                    <h1>Train</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
    export default {
        name: "transportation"
    }
</script>

<style scoped>
.top{
    margin-top: 100px;
    margin-bottom: 100px;
}
    img{
        width: 150px;
        height: 200px;
    }
    button{
        border-radius: 5px;
        background: #db0f31;
    }

</style>
