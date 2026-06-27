/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_header
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ConfigUiHeaderConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the custom header. Cannot start with `X-Vault-`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_header#name ConfigUiHeader#name}
  */
  readonly name: string;
  /**
  * Set of values for the header. At least one value is required. Duplicates are automatically ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_header#values ConfigUiHeader#values}
  */
  readonly values: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_header vault_config_ui_header}
*/
export class ConfigUiHeader extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_config_ui_header";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ConfigUiHeader resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigUiHeader to import
  * @param importFromId The id of the existing ConfigUiHeader that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_header#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigUiHeader to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_config_ui_header", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_ui_header vault_config_ui_header} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigUiHeaderConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigUiHeaderConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_config_ui_header',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.10.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._values = config.values;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      values: cdktn.listMapper(cdktn.stringToTerraform, false)(this._values),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      values: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._values),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
