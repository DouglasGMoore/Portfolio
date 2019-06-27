export default () => `
<div id ="content">      
<form
action="https://formspree.io/douglasg.moore@gmail.com"
method="POST"
>

<div>
 <input
    class="field"
    type="text"
      name="name"
    id="name"
    autofocus
    placeholder ="name"
    />
  
<div>
  <input class="field" typr="email" name="email" id="email" placeholder ="email"
      />
  
</div>
<div>
  
  <textarea
    class="fields"
    name="msg"
    id="msg"
    cols="80"
    rows="12"
    placeholder = "message"
    >
  </textarea>
</div>
<div><input class="button" type="submit" value="send"></div>
</div>

  </form>
      </div>
    `;
