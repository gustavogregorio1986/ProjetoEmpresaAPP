import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto de desenvolvimento web - empresa';

  empresa = 'https://controle-rs.com.br/wp-content/uploads/2022/08/Como-definir-os-valores-de-sua-empresa-Blog.png'
  altEmpresa = 'ilustração da empresa'
}
