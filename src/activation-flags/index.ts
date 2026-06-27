/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/activation_flags
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ActivationFlagsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Exact feature key to activate with PUT /sys/activation-flags/:feature/activate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/activation_flags#feature ActivationFlags#feature}
  */
  readonly feature: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/activation_flags vault_activation_flags}
*/
export class ActivationFlags extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_activation_flags";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ActivationFlags resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActivationFlags to import
  * @param importFromId The id of the existing ActivationFlags that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/activation_flags#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActivationFlags to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_activation_flags", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/activation_flags vault_activation_flags} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActivationFlagsConfig
  */
  public constructor(scope: Construct, id: string, config: ActivationFlagsConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_activation_flags',
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
    this._feature = config.feature;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // feature - computed: false, optional: false, required: true
  private _feature?: string; 
  public get feature() {
    return this.getStringAttribute('feature');
  }
  public set feature(value: string) {
    this._feature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature: cdktn.stringToTerraform(this._feature),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature: {
        value: cdktn.stringToHclTerraform(this._feature),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
