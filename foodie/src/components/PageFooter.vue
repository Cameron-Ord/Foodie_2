<template>
    <div>
        <footer class="page_footer">

            <span>

                <!--generic text for footer-->

            <nav>

                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>

            </nav>

          
            
           
            <nav>

                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                
            </nav>


            </span>
            
        </footer>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.page_footer{

    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    background: #003F91;

    align-items: center;

    justify-items: center;

    min-height: 10vh;

    color: #FFFFFF;

}

.page_footer>span{

    display: grid;


    grid-template-columns: 35vw 35vw;

    justify-items: center;

    align-items: center;


}

.page_footer>span>nav{

    display: grid;

    grid-template-columns: 15vw 15vw ;

    justify-items: center;

    align-items: center;
}

@media only screen and (min-width: 770px){
    .page_footer{

display: grid;

grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));

background: #003F91;

align-items: center;

justify-items: center;

min-height: 10vh;

color: #FFFFFF;

}
}
    
@media only screen and (min-width: 1025px){
    .page_footer{


grid-template-columns: repeat(auto-fit, minmax(770px, 1fr));



}
}

</style>