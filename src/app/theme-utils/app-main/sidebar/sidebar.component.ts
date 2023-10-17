import { Component, Input } from '@angular/core';
import { IMenu } from 'src/app/models/menu.model';
import { ProjectConstant } from 'src/app/models/project.constant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() state:boolean=false
  projectConstant=ProjectConstant

constructor(){}

   menus:IMenu[]=[
  
    {
      title:"Dashboard",
      routerlink:"/welcome",
      children:[
        {
          title:"Default",
          routerlink:"/w",
          icon:"dashboard",
          
        },
        {
          title:"CRM",
          routerlink:"/w",
         
        },
        {
          title:"E-commerce",
          routerlink:"/w",
          
        },
        {
          title:"Projects",
          routerlink:"/w",
          
        }
      ]
    },
    {
      title:"Apps",
      routerlink:"/welcome",
      icon:"appstore",
      children:[
        {
          title:"Chat",
          routerlink:"/w",
          
        },
        {
          title:"File Manager",
          routerlink:"/w",
         
        },
        {
          title:"Mail",
          routerlink:"/w",
          
        },
        {
          title:"Projects",
          routerlink:"/w",
          children:[
            {
              title:"Project List",
              routerlink:"/w",
              
            },
            {
              title:"Project Details",
              routerlink:"/w",
              
            },
          ]
          
        },
        {
          title:"E-commerce",
          routerlink:"/w",
          children:[
            {
              title:"Orders List",
              routerlink:"/w",
              
            },
            {
              title:"Products",
              routerlink:"/w",
              
            },
            {
              title:"Product List",
              routerlink:"/w",
              
            },
          ]
          
        },
       
      ]
    },
    {
      title:"Chart",
      routerlink:"/w",
      icon:"pie-chart"
    },
    {
      title:"Pages",
      routerlink:"/welcome",
      icon:"file",
      children:[
        {
          title:"Profile",
          routerlink:"/w",
          
        },
        {
          title:"Invoice",
          routerlink:"/w",
         
        },
        {
          title:"Members",
          routerlink:"/w",
          
        },
        {
          title:"Pricing",
          routerlink:"/w",
          
        },
        {
          title:"Setting",
          routerlink:"/w",
          
        },
        {
          title:"Blog",
          routerlink:"/w",
          children:[
            {
              title:"Blog Grid",
              routerlink:"/w",
              
            },
            {
              title:"Blog List",
              routerlink:"/w",
              
            },
            {
              title:"Blog Post",
              routerlink:"/w",
              
            },
          ]
          
        },

       
      ]
    },
    {
      title:"Authentication",
      routerlink:"/welcome",
      icon:"lock",
      children:[
        {
          title:"Login 1",
          routerlink:"/w",
          
        },
        {
          title:"Login 2",
          routerlink:"/w",
         
        },
        {
          title:"Login 3",
          routerlink:"/w",
          
        },
        {
          title:"Sign Up 1",
          routerlink:"/w",
          
        },
        {
          title:"Sign Up 2",
          routerlink:"/w",
          
        },
        {
          title:"Sign Up 3",
          routerlink:"/w",
          
        },
        {
          title:"Error 1",
          routerlink:"/w",
          
        },
        {
          title:"Error 2",
          routerlink:"/w",
          
        },
      
      ]
    },
   

   ]
}
