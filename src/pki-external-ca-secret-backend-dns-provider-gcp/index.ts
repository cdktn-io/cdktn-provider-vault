/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PkiExternalCaSecretBackendDnsProviderGcpConfig extends cdktn.TerraformMetaArguments {
  /**
  * GCP service account credentials as JSON content. Write-only — not returned by Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#credentials_wo PkiExternalCaSecretBackendDnsProviderGcp#credentials_wo}
  */
  readonly credentialsWo?: string;
  /**
  * Version counter for the write-only `credentials` field. Increment this value to trigger an update to the credentials in Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#credentials_wo_version PkiExternalCaSecretBackendDnsProviderGcp#credentials_wo_version}
  */
  readonly credentialsWoVersion?: number;
  /**
  * List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#identifiers PkiExternalCaSecretBackendDnsProviderGcp#identifiers}
  */
  readonly identifiers: string[];
  /**
  * Service account email to impersonate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#impersonate_service_account PkiExternalCaSecretBackendDnsProviderGcp#impersonate_service_account}
  */
  readonly impersonateServiceAccount?: string;
  /**
  * The path where the PKI External CA secret backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#mount PkiExternalCaSecretBackendDnsProviderGcp#mount}
  */
  readonly mount: string;
  /**
  * Name of the DNS provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#name PkiExternalCaSecretBackendDnsProviderGcp#name}
  */
  readonly name: string;
  /**
  * Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#nameserver PkiExternalCaSecretBackendDnsProviderGcp#nameserver}
  */
  readonly nameserver?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#namespace PkiExternalCaSecretBackendDnsProviderGcp#namespace}
  */
  readonly namespace?: string;
  /**
  * GCP project name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#project PkiExternalCaSecretBackendDnsProviderGcp#project}
  */
  readonly project?: string;
  /**
  * TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#ttl PkiExternalCaSecretBackendDnsProviderGcp#ttl}
  */
  readonly ttl?: number;
  /**
  * GCP Cloud DNS zone name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#zone_name PkiExternalCaSecretBackendDnsProviderGcp#zone_name}
  */
  readonly zoneName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp vault_pki_external_ca_secret_backend_dns_provider_gcp}
*/
export class PkiExternalCaSecretBackendDnsProviderGcp extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_external_ca_secret_backend_dns_provider_gcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderGcp resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiExternalCaSecretBackendDnsProviderGcp to import
  * @param importFromId The id of the existing PkiExternalCaSecretBackendDnsProviderGcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiExternalCaSecretBackendDnsProviderGcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_external_ca_secret_backend_dns_provider_gcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp vault_pki_external_ca_secret_backend_dns_provider_gcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiExternalCaSecretBackendDnsProviderGcpConfig
  */
  public constructor(scope: Construct, id: string, config: PkiExternalCaSecretBackendDnsProviderGcpConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_external_ca_secret_backend_dns_provider_gcp',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.12.0',
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
    this._credentialsWo = config.credentialsWo;
    this._credentialsWoVersion = config.credentialsWoVersion;
    this._identifiers = config.identifiers;
    this._impersonateServiceAccount = config.impersonateServiceAccount;
    this._mount = config.mount;
    this._name = config.name;
    this._nameserver = config.nameserver;
    this._namespace = config.namespace;
    this._project = config.project;
    this._ttl = config.ttl;
    this._zoneName = config.zoneName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // credentials_wo - computed: false, optional: true, required: false
  private _credentialsWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get credentialsWo() {
    return this.getStringAttribute('credentials_wo');
  }
  public set credentialsWo(value: string) {
    this._credentialsWo = value;
  }
  public resetCredentialsWo() {
    this._credentialsWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsWoInput() {
    return this._credentialsWo;
  }

  // credentials_wo_version - computed: false, optional: true, required: false
  private _credentialsWoVersion?: number; 
  public get credentialsWoVersion() {
    return this.getNumberAttribute('credentials_wo_version');
  }
  public set credentialsWoVersion(value: number) {
    this._credentialsWoVersion = value;
  }
  public resetCredentialsWoVersion() {
    this._credentialsWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsWoVersionInput() {
    return this._credentialsWoVersion;
  }

  // identifiers - computed: false, optional: false, required: true
  private _identifiers?: string[]; 
  public get identifiers() {
    return this.getListAttribute('identifiers');
  }
  public set identifiers(value: string[]) {
    this._identifiers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifiersInput() {
    return this._identifiers;
  }

  // impersonate_service_account - computed: false, optional: true, required: false
  private _impersonateServiceAccount?: string; 
  public get impersonateServiceAccount() {
    return this.getStringAttribute('impersonate_service_account');
  }
  public set impersonateServiceAccount(value: string) {
    this._impersonateServiceAccount = value;
  }
  public resetImpersonateServiceAccount() {
    this._impersonateServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonateServiceAccountInput() {
    return this._impersonateServiceAccount;
  }

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // mount - computed: false, optional: false, required: true
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
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

  // nameserver - computed: false, optional: true, required: false
  private _nameserver?: string; 
  public get nameserver() {
    return this.getStringAttribute('nameserver');
  }
  public set nameserver(value: string) {
    this._nameserver = value;
  }
  public resetNameserver() {
    this._nameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverInput() {
    return this._nameserver;
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

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // zone_name - computed: false, optional: true, required: false
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  public resetZoneName() {
    this._zoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credentials_wo: this.markWriteOnlyAttribute(cdktn.stringToTerraform(this._credentialsWo)),
      credentials_wo_version: cdktn.numberToTerraform(this._credentialsWoVersion),
      identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._identifiers),
      impersonate_service_account: cdktn.stringToTerraform(this._impersonateServiceAccount),
      mount: cdktn.stringToTerraform(this._mount),
      name: cdktn.stringToTerraform(this._name),
      nameserver: cdktn.stringToTerraform(this._nameserver),
      namespace: cdktn.stringToTerraform(this._namespace),
      project: cdktn.stringToTerraform(this._project),
      ttl: cdktn.numberToTerraform(this._ttl),
      zone_name: cdktn.stringToTerraform(this._zoneName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials_wo: {
        value: this.markWriteOnlyAttribute(cdktn.stringToHclTerraform(this._credentialsWo)),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials_wo_version: {
        value: cdktn.numberToHclTerraform(this._credentialsWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      identifiers: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._identifiers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      impersonate_service_account: {
        value: cdktn.stringToHclTerraform(this._impersonateServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount: {
        value: cdktn.stringToHclTerraform(this._mount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nameserver: {
        value: cdktn.stringToHclTerraform(this._nameserver),
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
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktn.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_name: {
        value: cdktn.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
