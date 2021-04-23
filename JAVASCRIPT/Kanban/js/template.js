export const $GridLayout = `
<div class="ui grid">
  <div class="four wide column"></div>
  <div class="four wide column"></div>
  <div class="four wide column"></div>
  <div class="four wide column"></div>
</div>
`

export const $WriteForm = `
<div class="form_area">
  <form class="ui form">
  <div class="field">
    <label>TITLE</label>
    <input type="text" name="first-name" placeholder="title">
  </div>
  <div class="field">
    <label>Content</label>
    <input type="text" name="last-name" placeholder="content">
  </div>
  <button class="ui button" type="submit">Submit</button>
  </form>
</div>
`;

export const $Card = `
<div class="ui cards">
  <div class="card">
    <div class="content">
      <div class="header">Veronika Ossi</div>
      <div class="meta">Friend</div>
      <div class="description">
        Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.
      </div>
    </div>
  </div>
</div>
`

export const $TodoList = `
<div class="kanban_board todo">
  <h2 class="ui header">
    <i class="keyboard icon"></i>
    <div class="content">
      TODO
    </div>
  </h2>
  <div class="list_area">
    ${$Card}
  </div>
</div>
`

export const $UsingList = `
<div class="kanban_board using">
  <h2 class="ui header">
    <i class="flask icon"></i>
    <div class="content">
      USING
    </div>
  </h2>
  <div class="list_area">
    ${$Card}
  </div>
</div>
`



export const $DoneList = `
<div class="kanban_board done">
  <h2 class="ui header">
    <i class="flag checkered icon"></i>
    <div class="content">
      DONE
    </div>
  </h2>
  <div class="list_area">
    ${$Card}
  </div>
</div>
`


