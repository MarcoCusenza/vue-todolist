const app = new Vue({
  el: '#root',
  data: {
    todo: [
      {
        text: 'Fare la spesa',
        done: true,
      },
      {
        text: 'Portare fuori il cane',
        done: false,
      },
      {
        text: 'Cucinare il pranzo',
        done: false,
      }
    ],
    inputText: '',
  },
  methods: {
    removeEl: function (index) {
      this.todo.splice(index, 1);
      console.log(this.todo);
    },
    addEl: function () {
      if (this.inputText != '') {
        const el = {
          text: this.inputText,
          done: false,
        }
        this.todo.push(el);
      } else {
        alert("Inserisci del testo prima di aggiungere");
      }
      this.inputText = '';
    }
  },
});
