/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_control_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ConfigControlGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * The maximum ttl for a control group wrapping token. This can be provided in seconds or duration (for example, 2h).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_control_group#max_ttl ConfigControlGroup#max_ttl}
  */
  readonly maxTtl: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_control_group#namespace ConfigControlGroup#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_control_group vault_config_control_group}
*/
export class ConfigControlGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_config_control_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ConfigControlGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigControlGroup to import
  * @param importFromId The id of the existing ConfigControlGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_control_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigControlGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_config_control_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/config_control_group vault_config_control_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigControlGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigControlGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_config_control_group',
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
    this._maxTtl = config.maxTtl;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_ttl - computed: false, optional: false, required: true
  private _maxTtl?: string; 
  public get maxTtl() {
    return this.getStringAttribute('max_ttl');
  }
  public set maxTtl(value: string) {
    this._maxTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      max_ttl: cdktn.stringToTerraform(this._maxTtl),
      namespace: cdktn.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      max_ttl: {
        value: cdktn.stringToHclTerraform(this._maxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
