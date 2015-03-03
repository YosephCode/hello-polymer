/**
 * Created by Yoseph on 03/03/2015.
 */
Polymer('greeting-tag', {
   ready:function(){
       this.salutations = [
           {what:'Hi', who: 'Many'},
           {what:'Cool', who: 'Sidy'},
           {what:'Whatever', who: 'Diego'},
           {what:'Awesome', who: 'Summer'}
       ];
       this.alternates = ['Hello', 'Hola', 'Howdy'];
       this.current = 0;
   },
    updateModel: function(){
        this.current = (this.current + 1) % this.alternates.length;
        this.salutations[0].what = this.alternates[this.current];
    }
});
