// (c) 2010 CodePlex Foundation
(function(){var b="HtmlEditorExtenderBehavior";function a(){var h="ToolbarButtons",b=false,f="blur",a=null,g="select",d=true,e="unselectable",c="div";Type.registerNamespace("Sys.Extended.UI");Sys.Extended.UI.HtmlEditorExtenderBehavior=function(j){var h="ajax__html_editor_extender_button",f="px",b=this;Sys.Extended.UI.HtmlEditorExtenderBehavior.initializeBase(b,[j]);b._textbox=Sys.Extended.UI.TextBoxWrapper.get_Wrapper(j);var i=b.get_id();b._ButtonWidth=23;b._ButtonHeight=21;b._containerTemplate={nodeName:c,properties:{id:i+"_ExtenderContainer"},cssClasses:[e,"ajax__html_editor_extender_container"]};b._editableTemplate={nodeName:c,properties:{id:i+"_ExtenderContentEditable",style:{width:"100%",height:"80%",overflow:"auto",clear:"both"},contentEditable:d},cssClasses:["ajax__html_editor_extender_texteditor"]};b._buttonTemplate={nodeName:"input",properties:{type:"button",style:{width:b._ButtonWidth+f,height:b._ButtonHeight+f}},cssClasses:[h]};b._textboxTemplate={nodeName:"input",properties:{type:"text"}};b._dropDownTemplate={nodeName:g,properties:{style:{width:b._ButtonWidth+f,height:b._ButtonHeight+f}},cssClasses:[h]};b._topButtonContainerTemplate={nodeName:c,properties:{id:i+"_ExtenderButtonContainer"},cssClasses:["ajax__html_editor_extender_buttoncontainer"]};b._container=a;b._toolbarButtons=a;b._editableDiv=a;b._topButtonContainer=a;b._buttons=[];b._btnClickHandler=a;b._requested_buttons=[];b._colorPicker=a;b._txtBoxForColor=a;if(typeof WebForm_OnSubmit=="function"&&!Sys.Extended.UI.HtmlEditorExtenderBehavior._originalWebForm_OnSubmit){Sys.Extended.UI.HtmlEditorExtenderBehavior._originalWebForm_OnSubmit=WebForm_OnSubmit;WebForm_OnSubmit=Sys.Extended.UI.HtmlEditorExtenderBehavior.WebForm_OnSubmit}};Sys.Extended.UI.HtmlEditorExtenderBehavior.prototype={initialize:function(){var b=this;Sys.Extended.UI.HtmlEditorExtenderBehavior.callBaseMethod(b,"initialize");var i=0;b._button_list=[];b._createContainer();b._createTopButtonContainer();b._createEditableDiv();b._createButton();var c=b._textbox._element.parentNode;while(c!=a&&c.nodeName!="FORM")c=c.parentNode;if(c==a)throw"Missing Form tag";var g=Function.createDelegate(b,b._textBox_onblur),e=Function.createDelegate(b,b._editableDiv_onblur),h=Function.createDelegate(b,b._executeCommand);$addHandler(b._textbox._element,f,g,d);$addHandler(b._editableDiv,f,e,d);$addHandler(b._topButtonContainer,"click",h)},_dispose:function(){$removeHandler(this._textbox._element,f,delTextBox_onblur);$removeHandler(this._editableDiv,f,delEditableDiv_onblur);$removeHandler(_topButtonContainer,"click",btnClickHandler);Sys.Extended.UI.HtmlEditorExtenderBehavior.callBaseMethod(this,"dispose")},_createContainer:function(){var a=this,c=a.get_element();a._container=$common.createElementFromTemplate(a._containerTemplate,c.parentNode);var b=$common.getBounds(a._textbox._element);$common.setSize(a._container,{width:b.width,height:b.height});$common.wrapElement(a._textbox._element,a._container,a._container)},_createTopButtonContainer:function(){this._topButtonContainer=$common.createElementFromTemplate(this._topButtonContainerTemplate,this._container)},_createButton:function(){var n="FontSize",k="title",j="name",h="Arial",d="11px",m="FontName",c=this;for(i=0;i<c._toolbarButtons.length;i++){var f;if(c._toolbarButtons[i].CommandName==m){f=$common.createElementFromTemplate({nodeName:"nobr",properties:{style:{cssFloat:"left",fontSize:d}},children:[{nodeName:"span",properties:{innerText:"Font ",style:{paddingLeft:"5px",fontWeight:"bold"}}}]},c._topButtonContainer);_select=$common.createElementFromTemplate({nodeName:g,properties:{style:{fontSize:d,fontFamily:h,height:"20px",width:"115px"}},events:{change:function(){document.execCommand(m,b,this.options[this.selectedIndex].value)}}},f);var o=[{Text:h,Value:"arial,helvetica,sans-serif"},{Text:"Courier New",Value:"courier new,courier,monospace"},{Text:"Georgia",Value:"georgia,times new roman,times,serif"},{Text:"Tahoma",Value:"tahoma,arial,helvetica,sans-serif"},{Text:"Times New Roman",Value:"times new roman,times,serif"},{Text:"Verdana",Value:"verdana,arial,helvetica,sans-serif"},{Text:"Impact",Value:"impact"},{Text:"WingDings",Value:"wingdings"}];for(x in o){var l=document.createElement("option");l.text=o[x].Text;l.value=o[x].Value;try{_select.add(l,a)}catch(q){_select.add(l)}}_select.setAttribute("id",c._id+c._toolbarButtons[i].CommandName);_select.setAttribute(j,c._toolbarButtons[i].CommandName);_select.setAttribute(k,c._toolbarButtons[i].Tooltip);_select.setAttribute(e,"on")}else if(c._toolbarButtons[i].CommandName==n){f=$common.createElementFromTemplate({nodeName:"nobr",properties:{style:{cssFloat:"left",fontSize:d}},children:[{nodeName:"span",properties:{innerText:"Font ",style:{paddingLeft:"5px",fontWeight:"bold"}}}]},c._topButtonContainer);_select=$common.createElementFromTemplate({nodeName:g,properties:{style:{fontSize:d,fontFamily:h,height:"20px",width:"50px"}},events:{change:function(){document.execCommand(n,b,this.options[this.selectedIndex].value)}}},f);var o=[{Text:"1",Value:"1"},{Text:"2",Value:"2"},{Text:"3",Value:"3"},{Text:"4",Value:"4"},{Text:"5",Value:"5"},{Text:"6",Value:"6"},{Text:"7",Value:"7"}];for(x in o){var l=document.createElement("option");l.text=o[x].Text;l.value=o[x].Value;try{_select.add(l,a)}catch(q){_select.add(l)}}_select.setAttribute("id",c._id+c._toolbarButtons[i].CommandName);_select.setAttribute(j,c._toolbarButtons[i].CommandName);_select.setAttribute(k,c._toolbarButtons[i].Tooltip);_select.setAttribute(e,"on")}else{var p={Copy:1,Cut:1,Paste:1};if(!(Sys.Browser.agent==Sys.Browser.Firefox&&p[c._toolbarButtons[i].CommandName])){f=$common.createElementFromTemplate(c._buttonTemplate,c._topButtonContainer);f.setAttribute("id",c._id+c._toolbarButtons[i].CommandName);f.setAttribute(j,c._toolbarButtons[i].CommandName);f.setAttribute(k,c._toolbarButtons[i].Tooltip);f.setAttribute(e,"on");f.setAttribute("class","ajax__html_editor_extender_button ajax__html_editor_extender_"+c._toolbarButtons[i].CommandName)}}Array.add(c._buttons,f)}},_createEditableDiv:function(){var a=this;a._editableDiv=$common.createElementFromTemplate(a._editableTemplate,a._container);a._editableDiv.innerHTML=a._textbox._element.value;$common.setVisible(a._textbox._element,b)},_editableDiv_onblur:function(){this._textbox._element.value=this.innerHTML},_textBox_onblur:function(){this._editableDiv.innerHTML=this.value},_editableDiv_submit:function(){var c=this,e=3,b=a;c._editableDiv.focus();if(Sys.Browser.agent!=Sys.Browser.Firefox)if(document.selection){b=document.selection.createRange();b.moveStart("character",e);b.select()}else{b=window.getSelection();b.collapse(c._editableDiv.firstChild,e)}var d=c._editableDiv.innerHTML.replace(/&/ig,"&amp;").replace(/</ig,"&lt;").replace(/>/ig,"&gt;").replace(/\'/ig,"&quot;").replace(/\xA0/ig,"&nbsp;");d=d.replace(/&lt;STRONG&gt;/ig,"&lt;b&gt;").replace(/&lt;\/STRONG&gt;/ig,"&lt;/b&gt;").replace(/&lt;EM&gt;/ig,"&lt;i&gt;").replace(/&lt;\/EM&gt;/ig,"&lt;/i&gt;");c._textbox._element.value=d},_executeCommand:function(e){var g="createLink",m=Sys.Browser.agent==Sys.Browser.Firefox;m&&document.execCommand("styleWithCSS",b,b);var n={JustifyRight:1,JustifyLeft:1,JustifyCenter:1,JustifyFull:1};if(n[e.target.name])try{document.execCommand(e.target.name,b,a)}catch(o){if(o&&o.result==2147500037){var k=window.getSelection().getRangeAt(0),h=document.createElement(c),i=b;h.style.height="1px;";if(k.startContainer.contentEditable=="true"){window.getSelection().collapseToEnd();i=d}var f=window.getSelection().getRangeAt(0).startContainer;while(f&&f.contentEditable!="true")f=f.parentNode;if(!f)throw"Selected node is not editable!";f.insertBefore(h,f.childNodes[0]);document.execCommand(e.target.name,b,a);h.parentNode.removeChild(h);i&&window.getSelection().addRange(k)}else window.console&&window.console.log&&window.console.log(o)}else if(e.target.name==g){var l=prompt("Please insert  URL","");l&&document.execCommand(g,b,l)}else if(e.target.name=="BackColor"||e.target.name=="ForeColor"){var j=prompt("Please insert  Color","");j&&document.execCommand(e.target.name,b,j)}else document.execCommand(e.target.name,b,a)},get_ButtonWidth:function(){return this._ButtonWidth},set_ButtonWidth:function(a){if(this._ButtonWidth!=a){this._ButtonWidth=a;this.raisePropertyChanged("ButtonWidth")}},get_ButtonHeight:function(){return this._ButtonHeight},set_ButtonHeight:function(a){if(this._ButtonHeight!=a){this._ButtonHeight=a;this.raisePropertyChanged("ButtonHeight")}},get_ToolbarButtons:function(){return this._toolbarButtons},set_ToolbarButtons:function(a){if(this._toolbarButtons!=a){this._toolbarButtons=a;this.raisePropertyChanged(h)}}};Sys.Extended.UI.HtmlEditorExtenderBehavior.registerClass("Sys.Extended.UI.HtmlEditorExtenderBehavior",Sys.Extended.UI.BehaviorBase);Sys.registerComponent(Sys.Extended.UI.HtmlEditorExtenderBehavior,{name:"HtmlEditorExtender",parameters:[{name:h,type:"HtmlEditorExtenderButton[]"}]});Sys.Extended.UI.HtmlEditorExtenderBehavior.WebForm_OnSubmit=function(){var d=Sys.Extended.UI.HtmlEditorExtenderBehavior._originalWebForm_OnSubmit();if(d)for(var b=Sys.Application.getComponents(),a=0;a<b.length;a++){var c=b[a];Sys.Extended.UI.HtmlEditorExtenderBehavior.isInstanceOfType(c)&&c._editableDiv_submit()}return d}}if(window.Sys&&Sys.loader)Sys.loader.registerScript(b,["ExtendedBase","ExtendedCommon"],a);else a()})();