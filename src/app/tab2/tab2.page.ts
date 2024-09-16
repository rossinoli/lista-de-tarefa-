import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  //atributos
  tarefasT2 : any[] = [];
  mensagemRecebidaT2: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {this.mensagemRecebidaT2 = params['novatarefa'];
      if (this.mensagemRecebidaT2.length > 0) {
        if (!this.tarefasT2.some(tarefa => tarefa.novatarefa === this.mensagemRecebidaT2)) {
          let TarefaNova = { novatarefa: this.mensagemRecebidaT2, selecionado: false, habilitado: true, ocultar: false };
          this.tarefasT2.push(TarefaNova);
        }
      }
    });
  }

  apagaCheckBox(tarefa:any){
    if (tarefa.selecionado){
      tarefa.habilitado = false;
      tarefa.oculto = true; // Ocultar checkbox ao ser marcado
      this.enviaMensagem(tarefa.novatarefa);


    }
   }

   enviaMensagem(tarefaRealizar: string){
   this.router.navigate(['tabs/tab3'],{queryParams:{mensagem:tarefaRealizar}});

   }
}
