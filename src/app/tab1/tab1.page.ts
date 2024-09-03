import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //atributos
  tarefas : any[] = [];
  tarefaRealizar:string = ''; 

  constructor(private router: Router) {}

  //metodos
  addTarefa(){
    if(this.tarefaRealizar.length > 0){
      let novaTarefa = {novatarefa:this.tarefaRealizar, selecionado:false, habilitado: true};
      this.tarefas.push(novaTarefa);
      this.tarefaRealizar = '';
    }
  }

  desabilitaCheckBox(tarefa:any){
     if (tarefa.selecionado){
       tarefa.habilitado = false;
       this.enviaMensagem(tarefa.novatarefa)
     }
  }

  enviaMensagem(tarefaRealizar: string){
    this.router.navigate(['tabs/tab2'],{queryParams:{mensagem:tarefaRealizar}});

  }


}
