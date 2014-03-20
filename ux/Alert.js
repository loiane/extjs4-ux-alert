Ext.define('Ext.ux.Alert', {

    statics : {
        msgCt : null,

        show : function (title, message, type, delay) {

            var me = this;

            function createBox (title, message, type) {
                return '<div class="msg ' + type + '">'+
                            '<button class="close">x</button>' +
                            '<h3>' + title + '</h3>' + 
                            '<p>' + message + '</p>' + 
                        '</div>';
            }

            if(!me.msgCt) {
                me.msgCt = Ext.DomHelper.insertFirst(document.body, {id:'msg-div'}, true);
            }

            var s = Ext.String.format.apply(String, Array.prototype.slice.call(arguments, 1));
            var m = Ext.DomHelper.append(me.msgCt, createBox(title, message, type), true);
            m.hide();
            m.slideIn('t');
            
            if(delay > 0){
                m.ghost('t', {delay: delay, remove: true});
            }else{
                var btn = m.first();
                btn.on('click', function(){
                    m.ghost("t", { delay: 500, remove: true});
                });
            }
        },

        success: function(title, message){
            this.show(title, message, 'success', 3000);
        },

        warning: function(title, message){
            this.show(title, message, 'warning', 0);
        },

        info: function(title, message){
            this.show(title, message, 'info', 3000);
        },

        error: function(title, message){
            this.show(title, message, 'error', 0);
        },
    }
});
