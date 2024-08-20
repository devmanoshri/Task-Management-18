import {
  Component,
  computed,
  input,
  output
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { CardComponent } from "../shared/card/card.component";
import { User } from './user.model';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  //selectedUser = signal(DUMMY_USERS[randomIndex]);
  //imagePath = computed(()=>'assets/users/' + this.selectedUser().avatar)
  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();

  selected = input.required<boolean>();
  user = input.required<User>();
  select = output<string>();

  imagePath = computed(() => {
    return '../../assets/users/' + this.user().avatar;
  });

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
