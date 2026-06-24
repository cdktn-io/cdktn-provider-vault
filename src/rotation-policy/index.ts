/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/rotation_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface RotationPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Maximum retries per cycle for this rotation policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/rotation_policy#max_retries_per_cycle RotationPolicy#max_retries_per_cycle}
  */
  readonly maxRetriesPerCycle: number;
  /**
  * Maximum retry cycles for this rotation policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/rotation_policy#max_retry_cycles RotationPolicy#max_retry_cycles}
  */
  readonly maxRetryCycles: number;
  /**
  * Name of the rotation policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/rotation_policy#name RotationPolicy#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/rotation_policy#namespace RotationPolicy#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/rotation_policy vault_rotation_policy}
*/
export class RotationPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_rotation_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a RotationPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RotationPolicy to import
  * @param importFromId The id of the existing RotationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/rotation_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RotationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_rotation_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/rotation_policy vault_rotation_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RotationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: RotationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_rotation_policy',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.10.0',
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
    this._maxRetriesPerCycle = config.maxRetriesPerCycle;
    this._maxRetryCycles = config.maxRetryCycles;
    this._name = config.name;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // max_retries_per_cycle - computed: false, optional: false, required: true
  private _maxRetriesPerCycle?: number; 
  public get maxRetriesPerCycle() {
    return this.getNumberAttribute('max_retries_per_cycle');
  }
  public set maxRetriesPerCycle(value: number) {
    this._maxRetriesPerCycle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesPerCycleInput() {
    return this._maxRetriesPerCycle;
  }

  // max_retry_cycles - computed: false, optional: false, required: true
  private _maxRetryCycles?: number; 
  public get maxRetryCycles() {
    return this.getNumberAttribute('max_retry_cycles');
  }
  public set maxRetryCycles(value: number) {
    this._maxRetryCycles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryCyclesInput() {
    return this._maxRetryCycles;
  }

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
      max_retries_per_cycle: cdktn.numberToTerraform(this._maxRetriesPerCycle),
      max_retry_cycles: cdktn.numberToTerraform(this._maxRetryCycles),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      max_retries_per_cycle: {
        value: cdktn.numberToHclTerraform(this._maxRetriesPerCycle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retry_cycles: {
        value: cdktn.numberToHclTerraform(this._maxRetryCycles),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
