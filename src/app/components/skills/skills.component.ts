import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

interface FolderWithNames {
  folderName: string;
  names: string[];
}

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  public svgFinal: string[] = [];
  public svgs: FolderWithNames[] = [
    {
      folderName: 'backend',
      names: [
        'java-svgrepo-com.svg',
        'laravel-svgrepo-com.svg',
        'nestjs-svgrepo-com.svg',
        'nodejs-svgrepo-com.svg',
        'php-svgrepo-com.svg',
        'spring-boot-svgrepo-com.svg',
      ],
    },
    {
      folderName: 'bbdd',
      names: [
        'mongodb-svgrepo-com.svg',
        'mysql-logo-svgrepo-com.svg',
        'oracle-svgrepo-com.svg',
        'phpmyadmin-svgrepo-com.svg',
        'sql-database-generic-svgrepo-com.svg',
      ],
    },
    {
      folderName: 'frontend',
      names: [
        'angular-svgrepo-com.svg',
        'bootstrap-fill-svgrepo-com.svg',
        'css-3-svgrepo-com.svg',
        'html-5-svgrepo-com.svg',
        'scss-svgrepo-com.svg',
        'tailwind-svgrepo-com.svg',
        'vue-svgrepo-com.svg',
        'github-svgrepo-com.svg',
      ],
    },
  ];

  ngOnInit(): void {
    this.svgs.forEach((folder) => {
      folder.names.forEach((name) => {
        // console.log(name);
        this.svgFinal.push(`assets/icons/${folder.folderName}/${name}`);
      });
    });

    // console.log(this.svgFinal);
  }
}
