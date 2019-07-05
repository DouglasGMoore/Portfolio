export default () => `
<div class="center"><h3>Feel Free to Drop Me a Line</h3></div> 
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
  <input class="field" type="email" name="email" id="email" placeholder ="email"
      />
  
</div>
<div>
  
  <textarea
    class="fields"
    name="msg"
    id="msg"
    cols="60"
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
