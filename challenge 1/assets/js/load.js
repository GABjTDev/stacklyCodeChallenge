export default function loader(){

    const $random = document.querySelector('.random');
    const $load = $random.lastElementChild;

    if(!$load.classList.contains('active')){
        $load.classList.add('active');
    }else{
        $load.classList.remove('active');
    }

}