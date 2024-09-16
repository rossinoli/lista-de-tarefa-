import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  tarefasT3 : any[] = [];
  mensagemRecebidaT3: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(){
    this.route.queryParams.subscribe(params =>{this.mensagemRecebidaT3 = params['mensagem'];
      if (this.mensagemRecebidaT3.length > 0) {
        if (!this.tarefasT3.some(tarefaT3 => tarefaT3.novatarefa === this.mensagemRecebidaT3)) {
          let TarefaNovaT3 = { novatarefa: this.mensagemRecebidaT3, selecionado: false, habilitado: true };
          this.tarefasT3.push(TarefaNovaT3);
        }
      }
  });
  }

}
