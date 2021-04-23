import { 
    $WriteForm,
    $GridLayout,
    $TodoList,
    $UsingList,
    $DoneList
} from './template.js';

function render() {
    const $root = document.querySelector('#root');
    $root.innerHTML = $GridLayout;

    const $grids = document.querySelectorAll('.column');
    $grids[0].innerHTML = $WriteForm
    $grids[1].innerHTML = $TodoList
    $grids[2].innerHTML = $UsingList
    $grids[3].innerHTML = $DoneList
}

render()
