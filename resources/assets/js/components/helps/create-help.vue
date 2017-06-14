<template>
  <div class="container">
    <div class="col-md-12">
      <div class="panel">
        <div class="panel-body">
          <form class="" action="" method="post">
            <div class="form-group">
              <label>Título: </label>
              <input type="text" placeholder="Digite o título do seu chamado" v-model="form.titulo" class="form-control">
            </div>
            <div class="form-group">
              <label>Prioridade: </label>
              <select class="form-control" v-model="form.prioridade">
                <option :value="prioridade.id" v-for="prioridade in prioridades">{{ prioridade.nome }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>Ocorrência: </label>
              <textarea rows="8" cols="8" class="form-control" v-model="form.ocorrencia"></textarea>
              <div class="help-block">
                <p>Digite brevemente a sua ocorrência, seja direto.</p>
              </div>
            </div>
            <div class="form-group">
              <input type="file" v-on:change="setAttachment">
              <div class="help-block">
                <p>Envie um anexo, pondendo ser somente imagem no formato jpeg e png, ou documento em pdf e word. Tamanho máximo é de 5 MB.</p>
              </div>
            </div>
            <div class="form-group">
              <input type="submit" value="Enviar" class="btn btn-default btn-block btn-success">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        prioridades: [
          {
            id: 1,
            nome: 'Baixa'
          },
          {
            id: 2,
            nome: 'Média'
          },
          {
            id: 3,
            nome: 'Alta'
          }
        ],
        form: {
          titulo: '',
          prioridade: 1,
          ocorrencia: '',
          attachment: null
        }
      }
    },
    methods: {
      setAttachment(e){
          let files = e.target.files || e.dataTransfer.files;
          if (!files.length) {
            return;
          }
          this.createAttachment(files[0]);
      },
      createAttachment(file){
          var image = new Image();
          var reader = new FileReader();
          var vm = this;
          reader.onload = (e) => {
            vm.form.attachment = e.target.result;
            vm.$emit('anexoFileUploader', e.target.result);
          }
          reader.readAsDataURL(file);
      }
    }
  }
</script>
<style scoped>

</style>
