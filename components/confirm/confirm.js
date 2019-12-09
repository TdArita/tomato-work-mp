Component({
  data: {
    value: ""
  },
  properties:{
    visible: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: ""
    }
  },
  methods: {
    watchValue: function(e) {
      this.setData({value: e.detail.value})
      console.log(this.data.value)
    },
    confirm: function (e) {
      if(this.data.value.length > 0){
        this.triggerEvent('confirm', this.data.value)
        this.setData({value: ""})
      } else {
        this.triggerEvent('confirm')
      }
    },
    cancel: function() {
      this.triggerEvent('cancel')
    }
  },
  
})