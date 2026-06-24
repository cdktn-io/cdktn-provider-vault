# `kmipSecretRole` Submodule <a name="`kmipSecretRole` Submodule" id="@cdktn/provider-vault.kmipSecretRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmipSecretRole <a name="KmipSecretRole" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role vault_kmip_secret_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer"></a>

```java
import io.cdktn.providers.vault.kmip_secret_role.KmipSecretRole;

KmipSecretRole.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .path(java.lang.String)
    .role(java.lang.String)
    .scope(java.lang.String)
//  .ca(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .operationActivate(java.lang.Boolean|IResolvable)
//  .operationAddAttribute(java.lang.Boolean|IResolvable)
//  .operationAll(java.lang.Boolean|IResolvable)
//  .operationCreate(java.lang.Boolean|IResolvable)
//  .operationCreateKeyPair(java.lang.Boolean|IResolvable)
//  .operationDecrypt(java.lang.Boolean|IResolvable)
//  .operationDeleteAttribute(java.lang.Boolean|IResolvable)
//  .operationDestroy(java.lang.Boolean|IResolvable)
//  .operationDiscoverVersions(java.lang.Boolean|IResolvable)
//  .operationEncrypt(java.lang.Boolean|IResolvable)
//  .operationGet(java.lang.Boolean|IResolvable)
//  .operationGetAttributeList(java.lang.Boolean|IResolvable)
//  .operationGetAttributes(java.lang.Boolean|IResolvable)
//  .operationImport(java.lang.Boolean|IResolvable)
//  .operationLocate(java.lang.Boolean|IResolvable)
//  .operationMac(java.lang.Boolean|IResolvable)
//  .operationMacVerify(java.lang.Boolean|IResolvable)
//  .operationModifyAttribute(java.lang.Boolean|IResolvable)
//  .operationNone(java.lang.Boolean|IResolvable)
//  .operationQuery(java.lang.Boolean|IResolvable)
//  .operationRegister(java.lang.Boolean|IResolvable)
//  .operationRekey(java.lang.Boolean|IResolvable)
//  .operationRekeyKeyPair(java.lang.Boolean|IResolvable)
//  .operationRevoke(java.lang.Boolean|IResolvable)
//  .operationRngRetrieve(java.lang.Boolean|IResolvable)
//  .operationRngSeed(java.lang.Boolean|IResolvable)
//  .operationSign(java.lang.Boolean|IResolvable)
//  .operationSignatureVerify(java.lang.Boolean|IResolvable)
//  .tlsClientKeyBits(java.lang.Number)
//  .tlsClientKeyType(java.lang.String)
//  .tlsClientTtl(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | Name of the scope. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.ca">ca</a></code> | <code>java.lang.String</code> | Name of the ca to use, if absent use legacy ca. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#id KmipSecretRole#id}. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationActivate">operationActivate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Activate operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationAddAttribute">operationAddAttribute</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Add Attribute operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationAll">operationAll</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant all permissions to this role. May not be specified with any other operation_* params. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationCreate">operationCreate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Create operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationCreateKeyPair">operationCreateKeyPair</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Create Key Pair operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationDecrypt">operationDecrypt</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Decrypt operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationDeleteAttribute">operationDeleteAttribute</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Delete Attribute operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationDestroy">operationDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Destroy operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationDiscoverVersions">operationDiscoverVersions</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Discover Version operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationEncrypt">operationEncrypt</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Encrypt operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationGet">operationGet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Get operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationGetAttributeList">operationGetAttributeList</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Get Attribute List operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationGetAttributes">operationGetAttributes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Get Attributes operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationImport">operationImport</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Import operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationLocate">operationLocate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Locate operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationMac">operationMac</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP MAC operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationMacVerify">operationMacVerify</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP MAC Verify operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationModifyAttribute">operationModifyAttribute</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Modify Attribute operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationNone">operationNone</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Remove all permissions from this role. May not be specified with any other operation_* params. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationQuery">operationQuery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Query operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRegister">operationRegister</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Register operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRekey">operationRekey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Rekey operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRekeyKeyPair">operationRekeyKeyPair</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Rekey Key Pair operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRevoke">operationRevoke</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Revoke operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRngRetrieve">operationRngRetrieve</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP RNG Retrieve operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRngSeed">operationRngSeed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP RNG Seed operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationSign">operationSign</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Sign operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationSignatureVerify">operationSignatureVerify</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Signature Verify operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.tlsClientKeyBits">tlsClientKeyBits</a></code> | <code>java.lang.Number</code> | Client certificate key bits, valid values depend on key type. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.tlsClientKeyType">tlsClientKeyType</a></code> | <code>java.lang.String</code> | Client certificate key type, rsa or ec. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.tlsClientTtl">tlsClientTtl</a></code> | <code>java.lang.Number</code> | Client certificate TTL in seconds. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#path KmipSecretRole#path}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#role KmipSecretRole#role}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

Name of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#scope KmipSecretRole#scope}

---

##### `ca`<sup>Optional</sup> <a name="ca" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.ca"></a>

- *Type:* java.lang.String

Name of the ca to use, if absent use legacy ca.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#ca KmipSecretRole#ca}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#id KmipSecretRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#namespace KmipSecretRole#namespace}

---

##### `operationActivate`<sup>Optional</sup> <a name="operationActivate" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationActivate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Activate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_activate KmipSecretRole#operation_activate}

---

##### `operationAddAttribute`<sup>Optional</sup> <a name="operationAddAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationAddAttribute"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Add Attribute operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_add_attribute KmipSecretRole#operation_add_attribute}

---

##### `operationAll`<sup>Optional</sup> <a name="operationAll" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationAll"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant all permissions to this role. May not be specified with any other operation_* params.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_all KmipSecretRole#operation_all}

---

##### `operationCreate`<sup>Optional</sup> <a name="operationCreate" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationCreate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Create operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_create KmipSecretRole#operation_create}

---

##### `operationCreateKeyPair`<sup>Optional</sup> <a name="operationCreateKeyPair" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationCreateKeyPair"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Create Key Pair operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_create_key_pair KmipSecretRole#operation_create_key_pair}

---

##### `operationDecrypt`<sup>Optional</sup> <a name="operationDecrypt" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationDecrypt"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Decrypt operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_decrypt KmipSecretRole#operation_decrypt}

---

##### `operationDeleteAttribute`<sup>Optional</sup> <a name="operationDeleteAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationDeleteAttribute"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Delete Attribute operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_delete_attribute KmipSecretRole#operation_delete_attribute}

---

##### `operationDestroy`<sup>Optional</sup> <a name="operationDestroy" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationDestroy"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Destroy operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_destroy KmipSecretRole#operation_destroy}

---

##### `operationDiscoverVersions`<sup>Optional</sup> <a name="operationDiscoverVersions" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationDiscoverVersions"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Discover Version operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_discover_versions KmipSecretRole#operation_discover_versions}

---

##### `operationEncrypt`<sup>Optional</sup> <a name="operationEncrypt" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationEncrypt"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Encrypt operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_encrypt KmipSecretRole#operation_encrypt}

---

##### `operationGet`<sup>Optional</sup> <a name="operationGet" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationGet"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Get operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_get KmipSecretRole#operation_get}

---

##### `operationGetAttributeList`<sup>Optional</sup> <a name="operationGetAttributeList" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationGetAttributeList"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Get Attribute List operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_get_attribute_list KmipSecretRole#operation_get_attribute_list}

---

##### `operationGetAttributes`<sup>Optional</sup> <a name="operationGetAttributes" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationGetAttributes"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Get Attributes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_get_attributes KmipSecretRole#operation_get_attributes}

---

##### `operationImport`<sup>Optional</sup> <a name="operationImport" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationImport"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Import operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_import KmipSecretRole#operation_import}

---

##### `operationLocate`<sup>Optional</sup> <a name="operationLocate" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationLocate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Locate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_locate KmipSecretRole#operation_locate}

---

##### `operationMac`<sup>Optional</sup> <a name="operationMac" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationMac"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP MAC operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_mac KmipSecretRole#operation_mac}

---

##### `operationMacVerify`<sup>Optional</sup> <a name="operationMacVerify" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationMacVerify"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP MAC Verify operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_mac_verify KmipSecretRole#operation_mac_verify}

---

##### `operationModifyAttribute`<sup>Optional</sup> <a name="operationModifyAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationModifyAttribute"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Modify Attribute operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_modify_attribute KmipSecretRole#operation_modify_attribute}

---

##### `operationNone`<sup>Optional</sup> <a name="operationNone" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationNone"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Remove all permissions from this role. May not be specified with any other operation_* params.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_none KmipSecretRole#operation_none}

---

##### `operationQuery`<sup>Optional</sup> <a name="operationQuery" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationQuery"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Query operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_query KmipSecretRole#operation_query}

---

##### `operationRegister`<sup>Optional</sup> <a name="operationRegister" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRegister"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Register operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_register KmipSecretRole#operation_register}

---

##### `operationRekey`<sup>Optional</sup> <a name="operationRekey" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRekey"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Rekey operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_rekey KmipSecretRole#operation_rekey}

---

##### `operationRekeyKeyPair`<sup>Optional</sup> <a name="operationRekeyKeyPair" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRekeyKeyPair"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Rekey Key Pair operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_rekey_key_pair KmipSecretRole#operation_rekey_key_pair}

---

##### `operationRevoke`<sup>Optional</sup> <a name="operationRevoke" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRevoke"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Revoke operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_revoke KmipSecretRole#operation_revoke}

---

##### `operationRngRetrieve`<sup>Optional</sup> <a name="operationRngRetrieve" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRngRetrieve"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP RNG Retrieve operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_rng_retrieve KmipSecretRole#operation_rng_retrieve}

---

##### `operationRngSeed`<sup>Optional</sup> <a name="operationRngSeed" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRngSeed"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP RNG Seed operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_rng_seed KmipSecretRole#operation_rng_seed}

---

##### `operationSign`<sup>Optional</sup> <a name="operationSign" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationSign"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Sign operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_sign KmipSecretRole#operation_sign}

---

##### `operationSignatureVerify`<sup>Optional</sup> <a name="operationSignatureVerify" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationSignatureVerify"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Signature Verify operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_signature_verify KmipSecretRole#operation_signature_verify}

---

##### `tlsClientKeyBits`<sup>Optional</sup> <a name="tlsClientKeyBits" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.tlsClientKeyBits"></a>

- *Type:* java.lang.Number

Client certificate key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#tls_client_key_bits KmipSecretRole#tls_client_key_bits}

---

##### `tlsClientKeyType`<sup>Optional</sup> <a name="tlsClientKeyType" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.tlsClientKeyType"></a>

- *Type:* java.lang.String

Client certificate key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#tls_client_key_type KmipSecretRole#tls_client_key_type}

---

##### `tlsClientTtl`<sup>Optional</sup> <a name="tlsClientTtl" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.tlsClientTtl"></a>

- *Type:* java.lang.Number

Client certificate TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#tls_client_ttl KmipSecretRole#tls_client_ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetCa">resetCa</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationActivate">resetOperationActivate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAddAttribute">resetOperationAddAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAll">resetOperationAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationCreate">resetOperationCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationCreateKeyPair">resetOperationCreateKeyPair</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDecrypt">resetOperationDecrypt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDeleteAttribute">resetOperationDeleteAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDestroy">resetOperationDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDiscoverVersions">resetOperationDiscoverVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationEncrypt">resetOperationEncrypt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGet">resetOperationGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributeList">resetOperationGetAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributes">resetOperationGetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationImport">resetOperationImport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationLocate">resetOperationLocate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationMac">resetOperationMac</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationMacVerify">resetOperationMacVerify</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationModifyAttribute">resetOperationModifyAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationNone">resetOperationNone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationQuery">resetOperationQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRegister">resetOperationRegister</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRekey">resetOperationRekey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRekeyKeyPair">resetOperationRekeyKeyPair</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRevoke">resetOperationRevoke</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRngRetrieve">resetOperationRngRetrieve</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRngSeed">resetOperationRngSeed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationSign">resetOperationSign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationSignatureVerify">resetOperationSignatureVerify</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyBits">resetTlsClientKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyType">resetTlsClientKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientTtl">resetTlsClientTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCa` <a name="resetCa" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetCa"></a>

```java
public void resetCa()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOperationActivate` <a name="resetOperationActivate" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationActivate"></a>

```java
public void resetOperationActivate()
```

##### `resetOperationAddAttribute` <a name="resetOperationAddAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAddAttribute"></a>

```java
public void resetOperationAddAttribute()
```

##### `resetOperationAll` <a name="resetOperationAll" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAll"></a>

```java
public void resetOperationAll()
```

##### `resetOperationCreate` <a name="resetOperationCreate" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationCreate"></a>

```java
public void resetOperationCreate()
```

##### `resetOperationCreateKeyPair` <a name="resetOperationCreateKeyPair" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationCreateKeyPair"></a>

```java
public void resetOperationCreateKeyPair()
```

##### `resetOperationDecrypt` <a name="resetOperationDecrypt" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDecrypt"></a>

```java
public void resetOperationDecrypt()
```

##### `resetOperationDeleteAttribute` <a name="resetOperationDeleteAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDeleteAttribute"></a>

```java
public void resetOperationDeleteAttribute()
```

##### `resetOperationDestroy` <a name="resetOperationDestroy" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDestroy"></a>

```java
public void resetOperationDestroy()
```

##### `resetOperationDiscoverVersions` <a name="resetOperationDiscoverVersions" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDiscoverVersions"></a>

```java
public void resetOperationDiscoverVersions()
```

##### `resetOperationEncrypt` <a name="resetOperationEncrypt" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationEncrypt"></a>

```java
public void resetOperationEncrypt()
```

##### `resetOperationGet` <a name="resetOperationGet" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGet"></a>

```java
public void resetOperationGet()
```

##### `resetOperationGetAttributeList` <a name="resetOperationGetAttributeList" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributeList"></a>

```java
public void resetOperationGetAttributeList()
```

##### `resetOperationGetAttributes` <a name="resetOperationGetAttributes" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributes"></a>

```java
public void resetOperationGetAttributes()
```

##### `resetOperationImport` <a name="resetOperationImport" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationImport"></a>

```java
public void resetOperationImport()
```

##### `resetOperationLocate` <a name="resetOperationLocate" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationLocate"></a>

```java
public void resetOperationLocate()
```

##### `resetOperationMac` <a name="resetOperationMac" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationMac"></a>

```java
public void resetOperationMac()
```

##### `resetOperationMacVerify` <a name="resetOperationMacVerify" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationMacVerify"></a>

```java
public void resetOperationMacVerify()
```

##### `resetOperationModifyAttribute` <a name="resetOperationModifyAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationModifyAttribute"></a>

```java
public void resetOperationModifyAttribute()
```

##### `resetOperationNone` <a name="resetOperationNone" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationNone"></a>

```java
public void resetOperationNone()
```

##### `resetOperationQuery` <a name="resetOperationQuery" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationQuery"></a>

```java
public void resetOperationQuery()
```

##### `resetOperationRegister` <a name="resetOperationRegister" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRegister"></a>

```java
public void resetOperationRegister()
```

##### `resetOperationRekey` <a name="resetOperationRekey" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRekey"></a>

```java
public void resetOperationRekey()
```

##### `resetOperationRekeyKeyPair` <a name="resetOperationRekeyKeyPair" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRekeyKeyPair"></a>

```java
public void resetOperationRekeyKeyPair()
```

##### `resetOperationRevoke` <a name="resetOperationRevoke" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRevoke"></a>

```java
public void resetOperationRevoke()
```

##### `resetOperationRngRetrieve` <a name="resetOperationRngRetrieve" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRngRetrieve"></a>

```java
public void resetOperationRngRetrieve()
```

##### `resetOperationRngSeed` <a name="resetOperationRngSeed" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRngSeed"></a>

```java
public void resetOperationRngSeed()
```

##### `resetOperationSign` <a name="resetOperationSign" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationSign"></a>

```java
public void resetOperationSign()
```

##### `resetOperationSignatureVerify` <a name="resetOperationSignatureVerify" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationSignatureVerify"></a>

```java
public void resetOperationSignatureVerify()
```

##### `resetTlsClientKeyBits` <a name="resetTlsClientKeyBits" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyBits"></a>

```java
public void resetTlsClientKeyBits()
```

##### `resetTlsClientKeyType` <a name="resetTlsClientKeyType" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyType"></a>

```java
public void resetTlsClientKeyType()
```

##### `resetTlsClientTtl` <a name="resetTlsClientTtl" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientTtl"></a>

```java
public void resetTlsClientTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KmipSecretRole resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.isConstruct"></a>

```java
import io.cdktn.providers.vault.kmip_secret_role.KmipSecretRole;

KmipSecretRole.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.kmip_secret_role.KmipSecretRole;

KmipSecretRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.kmip_secret_role.KmipSecretRole;

KmipSecretRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.kmip_secret_role.KmipSecretRole;

KmipSecretRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KmipSecretRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KmipSecretRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KmipSecretRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KmipSecretRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KmipSecretRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.caInput">caInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivateInput">operationActivateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttributeInput">operationAddAttributeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAllInput">operationAllInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreateInput">operationCreateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreateKeyPairInput">operationCreateKeyPairInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDecryptInput">operationDecryptInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDeleteAttributeInput">operationDeleteAttributeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroyInput">operationDestroyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersionsInput">operationDiscoverVersionsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationEncryptInput">operationEncryptInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeListInput">operationGetAttributeListInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributesInput">operationGetAttributesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetInput">operationGetInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationImportInput">operationImportInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocateInput">operationLocateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationMacInput">operationMacInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationMacVerifyInput">operationMacVerifyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationModifyAttributeInput">operationModifyAttributeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNoneInput">operationNoneInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationQueryInput">operationQueryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegisterInput">operationRegisterInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekeyInput">operationRekeyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekeyKeyPairInput">operationRekeyKeyPairInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevokeInput">operationRevokeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRngRetrieveInput">operationRngRetrieveInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRngSeedInput">operationRngSeedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationSignatureVerifyInput">operationSignatureVerifyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationSignInput">operationSignInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBitsInput">tlsClientKeyBitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyTypeInput">tlsClientKeyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtlInput">tlsClientTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.ca">ca</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivate">operationActivate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttribute">operationAddAttribute</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAll">operationAll</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreate">operationCreate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreateKeyPair">operationCreateKeyPair</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDecrypt">operationDecrypt</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDeleteAttribute">operationDeleteAttribute</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroy">operationDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersions">operationDiscoverVersions</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationEncrypt">operationEncrypt</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGet">operationGet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeList">operationGetAttributeList</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributes">operationGetAttributes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationImport">operationImport</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocate">operationLocate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationMac">operationMac</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationMacVerify">operationMacVerify</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationModifyAttribute">operationModifyAttribute</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNone">operationNone</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationQuery">operationQuery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegister">operationRegister</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekey">operationRekey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekeyKeyPair">operationRekeyKeyPair</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevoke">operationRevoke</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRngRetrieve">operationRngRetrieve</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRngSeed">operationRngSeed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationSign">operationSign</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationSignatureVerify">operationSignatureVerify</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBits">tlsClientKeyBits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyType">tlsClientKeyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtl">tlsClientTtl</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `caInput`<sup>Optional</sup> <a name="caInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.caInput"></a>

```java
public java.lang.String getCaInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `operationActivateInput`<sup>Optional</sup> <a name="operationActivateInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivateInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationActivateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationAddAttributeInput`<sup>Optional</sup> <a name="operationAddAttributeInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttributeInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationAddAttributeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationAllInput`<sup>Optional</sup> <a name="operationAllInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAllInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationAllInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationCreateInput`<sup>Optional</sup> <a name="operationCreateInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreateInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationCreateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationCreateKeyPairInput`<sup>Optional</sup> <a name="operationCreateKeyPairInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreateKeyPairInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationCreateKeyPairInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationDecryptInput`<sup>Optional</sup> <a name="operationDecryptInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDecryptInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationDecryptInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationDeleteAttributeInput`<sup>Optional</sup> <a name="operationDeleteAttributeInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDeleteAttributeInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationDeleteAttributeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationDestroyInput`<sup>Optional</sup> <a name="operationDestroyInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroyInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationDestroyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationDiscoverVersionsInput`<sup>Optional</sup> <a name="operationDiscoverVersionsInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersionsInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationDiscoverVersionsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationEncryptInput`<sup>Optional</sup> <a name="operationEncryptInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationEncryptInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationEncryptInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationGetAttributeListInput`<sup>Optional</sup> <a name="operationGetAttributeListInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeListInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationGetAttributeListInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationGetAttributesInput`<sup>Optional</sup> <a name="operationGetAttributesInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributesInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationGetAttributesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationGetInput`<sup>Optional</sup> <a name="operationGetInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationGetInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationImportInput`<sup>Optional</sup> <a name="operationImportInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationImportInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationImportInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationLocateInput`<sup>Optional</sup> <a name="operationLocateInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocateInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationLocateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationMacInput`<sup>Optional</sup> <a name="operationMacInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationMacInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationMacInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationMacVerifyInput`<sup>Optional</sup> <a name="operationMacVerifyInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationMacVerifyInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationMacVerifyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationModifyAttributeInput`<sup>Optional</sup> <a name="operationModifyAttributeInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationModifyAttributeInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationModifyAttributeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationNoneInput`<sup>Optional</sup> <a name="operationNoneInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNoneInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationNoneInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationQueryInput`<sup>Optional</sup> <a name="operationQueryInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationQueryInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationQueryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationRegisterInput`<sup>Optional</sup> <a name="operationRegisterInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegisterInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationRegisterInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationRekeyInput`<sup>Optional</sup> <a name="operationRekeyInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekeyInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationRekeyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationRekeyKeyPairInput`<sup>Optional</sup> <a name="operationRekeyKeyPairInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekeyKeyPairInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationRekeyKeyPairInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationRevokeInput`<sup>Optional</sup> <a name="operationRevokeInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevokeInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationRevokeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationRngRetrieveInput`<sup>Optional</sup> <a name="operationRngRetrieveInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRngRetrieveInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationRngRetrieveInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationRngSeedInput`<sup>Optional</sup> <a name="operationRngSeedInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRngSeedInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationRngSeedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationSignatureVerifyInput`<sup>Optional</sup> <a name="operationSignatureVerifyInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationSignatureVerifyInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationSignatureVerifyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationSignInput`<sup>Optional</sup> <a name="operationSignInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationSignInput"></a>

```java
public java.lang.Boolean|IResolvable getOperationSignInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `tlsClientKeyBitsInput`<sup>Optional</sup> <a name="tlsClientKeyBitsInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBitsInput"></a>

```java
public java.lang.Number getTlsClientKeyBitsInput();
```

- *Type:* java.lang.Number

---

##### `tlsClientKeyTypeInput`<sup>Optional</sup> <a name="tlsClientKeyTypeInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyTypeInput"></a>

```java
public java.lang.String getTlsClientKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `tlsClientTtlInput`<sup>Optional</sup> <a name="tlsClientTtlInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtlInput"></a>

```java
public java.lang.Number getTlsClientTtlInput();
```

- *Type:* java.lang.Number

---

##### `ca`<sup>Required</sup> <a name="ca" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.ca"></a>

```java
public java.lang.String getCa();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `operationActivate`<sup>Required</sup> <a name="operationActivate" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivate"></a>

```java
public java.lang.Boolean|IResolvable getOperationActivate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationAddAttribute`<sup>Required</sup> <a name="operationAddAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttribute"></a>

```java
public java.lang.Boolean|IResolvable getOperationAddAttribute();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationAll`<sup>Required</sup> <a name="operationAll" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAll"></a>

```java
public java.lang.Boolean|IResolvable getOperationAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationCreate`<sup>Required</sup> <a name="operationCreate" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreate"></a>

```java
public java.lang.Boolean|IResolvable getOperationCreate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationCreateKeyPair`<sup>Required</sup> <a name="operationCreateKeyPair" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreateKeyPair"></a>

```java
public java.lang.Boolean|IResolvable getOperationCreateKeyPair();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationDecrypt`<sup>Required</sup> <a name="operationDecrypt" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDecrypt"></a>

```java
public java.lang.Boolean|IResolvable getOperationDecrypt();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationDeleteAttribute`<sup>Required</sup> <a name="operationDeleteAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDeleteAttribute"></a>

```java
public java.lang.Boolean|IResolvable getOperationDeleteAttribute();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationDestroy`<sup>Required</sup> <a name="operationDestroy" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroy"></a>

```java
public java.lang.Boolean|IResolvable getOperationDestroy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationDiscoverVersions`<sup>Required</sup> <a name="operationDiscoverVersions" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersions"></a>

```java
public java.lang.Boolean|IResolvable getOperationDiscoverVersions();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationEncrypt`<sup>Required</sup> <a name="operationEncrypt" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationEncrypt"></a>

```java
public java.lang.Boolean|IResolvable getOperationEncrypt();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationGet`<sup>Required</sup> <a name="operationGet" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGet"></a>

```java
public java.lang.Boolean|IResolvable getOperationGet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationGetAttributeList`<sup>Required</sup> <a name="operationGetAttributeList" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeList"></a>

```java
public java.lang.Boolean|IResolvable getOperationGetAttributeList();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationGetAttributes`<sup>Required</sup> <a name="operationGetAttributes" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributes"></a>

```java
public java.lang.Boolean|IResolvable getOperationGetAttributes();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationImport`<sup>Required</sup> <a name="operationImport" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationImport"></a>

```java
public java.lang.Boolean|IResolvable getOperationImport();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationLocate`<sup>Required</sup> <a name="operationLocate" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocate"></a>

```java
public java.lang.Boolean|IResolvable getOperationLocate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationMac`<sup>Required</sup> <a name="operationMac" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationMac"></a>

```java
public java.lang.Boolean|IResolvable getOperationMac();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationMacVerify`<sup>Required</sup> <a name="operationMacVerify" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationMacVerify"></a>

```java
public java.lang.Boolean|IResolvable getOperationMacVerify();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationModifyAttribute`<sup>Required</sup> <a name="operationModifyAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationModifyAttribute"></a>

```java
public java.lang.Boolean|IResolvable getOperationModifyAttribute();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationNone`<sup>Required</sup> <a name="operationNone" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNone"></a>

```java
public java.lang.Boolean|IResolvable getOperationNone();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationQuery`<sup>Required</sup> <a name="operationQuery" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationQuery"></a>

```java
public java.lang.Boolean|IResolvable getOperationQuery();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationRegister`<sup>Required</sup> <a name="operationRegister" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegister"></a>

```java
public java.lang.Boolean|IResolvable getOperationRegister();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationRekey`<sup>Required</sup> <a name="operationRekey" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekey"></a>

```java
public java.lang.Boolean|IResolvable getOperationRekey();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationRekeyKeyPair`<sup>Required</sup> <a name="operationRekeyKeyPair" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekeyKeyPair"></a>

```java
public java.lang.Boolean|IResolvable getOperationRekeyKeyPair();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationRevoke`<sup>Required</sup> <a name="operationRevoke" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevoke"></a>

```java
public java.lang.Boolean|IResolvable getOperationRevoke();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationRngRetrieve`<sup>Required</sup> <a name="operationRngRetrieve" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRngRetrieve"></a>

```java
public java.lang.Boolean|IResolvable getOperationRngRetrieve();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationRngSeed`<sup>Required</sup> <a name="operationRngSeed" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRngSeed"></a>

```java
public java.lang.Boolean|IResolvable getOperationRngSeed();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationSign`<sup>Required</sup> <a name="operationSign" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationSign"></a>

```java
public java.lang.Boolean|IResolvable getOperationSign();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `operationSignatureVerify`<sup>Required</sup> <a name="operationSignatureVerify" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationSignatureVerify"></a>

```java
public java.lang.Boolean|IResolvable getOperationSignatureVerify();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `tlsClientKeyBits`<sup>Required</sup> <a name="tlsClientKeyBits" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBits"></a>

```java
public java.lang.Number getTlsClientKeyBits();
```

- *Type:* java.lang.Number

---

##### `tlsClientKeyType`<sup>Required</sup> <a name="tlsClientKeyType" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyType"></a>

```java
public java.lang.String getTlsClientKeyType();
```

- *Type:* java.lang.String

---

##### `tlsClientTtl`<sup>Required</sup> <a name="tlsClientTtl" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtl"></a>

```java
public java.lang.Number getTlsClientTtl();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KmipSecretRoleConfig <a name="KmipSecretRoleConfig" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.kmip_secret_role.KmipSecretRoleConfig;

KmipSecretRoleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .path(java.lang.String)
    .role(java.lang.String)
    .scope(java.lang.String)
//  .ca(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .operationActivate(java.lang.Boolean|IResolvable)
//  .operationAddAttribute(java.lang.Boolean|IResolvable)
//  .operationAll(java.lang.Boolean|IResolvable)
//  .operationCreate(java.lang.Boolean|IResolvable)
//  .operationCreateKeyPair(java.lang.Boolean|IResolvable)
//  .operationDecrypt(java.lang.Boolean|IResolvable)
//  .operationDeleteAttribute(java.lang.Boolean|IResolvable)
//  .operationDestroy(java.lang.Boolean|IResolvable)
//  .operationDiscoverVersions(java.lang.Boolean|IResolvable)
//  .operationEncrypt(java.lang.Boolean|IResolvable)
//  .operationGet(java.lang.Boolean|IResolvable)
//  .operationGetAttributeList(java.lang.Boolean|IResolvable)
//  .operationGetAttributes(java.lang.Boolean|IResolvable)
//  .operationImport(java.lang.Boolean|IResolvable)
//  .operationLocate(java.lang.Boolean|IResolvable)
//  .operationMac(java.lang.Boolean|IResolvable)
//  .operationMacVerify(java.lang.Boolean|IResolvable)
//  .operationModifyAttribute(java.lang.Boolean|IResolvable)
//  .operationNone(java.lang.Boolean|IResolvable)
//  .operationQuery(java.lang.Boolean|IResolvable)
//  .operationRegister(java.lang.Boolean|IResolvable)
//  .operationRekey(java.lang.Boolean|IResolvable)
//  .operationRekeyKeyPair(java.lang.Boolean|IResolvable)
//  .operationRevoke(java.lang.Boolean|IResolvable)
//  .operationRngRetrieve(java.lang.Boolean|IResolvable)
//  .operationRngSeed(java.lang.Boolean|IResolvable)
//  .operationSign(java.lang.Boolean|IResolvable)
//  .operationSignatureVerify(java.lang.Boolean|IResolvable)
//  .tlsClientKeyBits(java.lang.Number)
//  .tlsClientKeyType(java.lang.String)
//  .tlsClientTtl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.path">path</a></code> | <code>java.lang.String</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.role">role</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | Name of the scope. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.ca">ca</a></code> | <code>java.lang.String</code> | Name of the ca to use, if absent use legacy ca. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#id KmipSecretRole#id}. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationActivate">operationActivate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Activate operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAddAttribute">operationAddAttribute</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Add Attribute operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAll">operationAll</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant all permissions to this role. May not be specified with any other operation_* params. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationCreate">operationCreate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Create operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationCreateKeyPair">operationCreateKeyPair</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Create Key Pair operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDecrypt">operationDecrypt</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Decrypt operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDeleteAttribute">operationDeleteAttribute</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Delete Attribute operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDestroy">operationDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Destroy operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDiscoverVersions">operationDiscoverVersions</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Discover Version operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationEncrypt">operationEncrypt</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Encrypt operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGet">operationGet</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Get operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributeList">operationGetAttributeList</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Get Attribute List operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributes">operationGetAttributes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Get Attributes operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationImport">operationImport</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Import operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationLocate">operationLocate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Locate operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationMac">operationMac</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP MAC operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationMacVerify">operationMacVerify</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP MAC Verify operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationModifyAttribute">operationModifyAttribute</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Modify Attribute operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationNone">operationNone</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Remove all permissions from this role. May not be specified with any other operation_* params. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationQuery">operationQuery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Query operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRegister">operationRegister</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Register operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRekey">operationRekey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Rekey operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRekeyKeyPair">operationRekeyKeyPair</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Rekey Key Pair operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRevoke">operationRevoke</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Revoke operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRngRetrieve">operationRngRetrieve</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP RNG Retrieve operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRngSeed">operationRngSeed</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP RNG Seed operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationSign">operationSign</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Sign operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationSignatureVerify">operationSignatureVerify</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Grant permission to use the KMIP Signature Verify operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyBits">tlsClientKeyBits</a></code> | <code>java.lang.Number</code> | Client certificate key bits, valid values depend on key type. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyType">tlsClientKeyType</a></code> | <code>java.lang.String</code> | Client certificate key type, rsa or ec. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientTtl">tlsClientTtl</a></code> | <code>java.lang.Number</code> | Client certificate TTL in seconds. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#path KmipSecretRole#path}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#role KmipSecretRole#role}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Name of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#scope KmipSecretRole#scope}

---

##### `ca`<sup>Optional</sup> <a name="ca" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.ca"></a>

```java
public java.lang.String getCa();
```

- *Type:* java.lang.String

Name of the ca to use, if absent use legacy ca.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#ca KmipSecretRole#ca}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#id KmipSecretRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#namespace KmipSecretRole#namespace}

---

##### `operationActivate`<sup>Optional</sup> <a name="operationActivate" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationActivate"></a>

```java
public java.lang.Boolean|IResolvable getOperationActivate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Activate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_activate KmipSecretRole#operation_activate}

---

##### `operationAddAttribute`<sup>Optional</sup> <a name="operationAddAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAddAttribute"></a>

```java
public java.lang.Boolean|IResolvable getOperationAddAttribute();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Add Attribute operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_add_attribute KmipSecretRole#operation_add_attribute}

---

##### `operationAll`<sup>Optional</sup> <a name="operationAll" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAll"></a>

```java
public java.lang.Boolean|IResolvable getOperationAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant all permissions to this role. May not be specified with any other operation_* params.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_all KmipSecretRole#operation_all}

---

##### `operationCreate`<sup>Optional</sup> <a name="operationCreate" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationCreate"></a>

```java
public java.lang.Boolean|IResolvable getOperationCreate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Create operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_create KmipSecretRole#operation_create}

---

##### `operationCreateKeyPair`<sup>Optional</sup> <a name="operationCreateKeyPair" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationCreateKeyPair"></a>

```java
public java.lang.Boolean|IResolvable getOperationCreateKeyPair();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Create Key Pair operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_create_key_pair KmipSecretRole#operation_create_key_pair}

---

##### `operationDecrypt`<sup>Optional</sup> <a name="operationDecrypt" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDecrypt"></a>

```java
public java.lang.Boolean|IResolvable getOperationDecrypt();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Decrypt operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_decrypt KmipSecretRole#operation_decrypt}

---

##### `operationDeleteAttribute`<sup>Optional</sup> <a name="operationDeleteAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDeleteAttribute"></a>

```java
public java.lang.Boolean|IResolvable getOperationDeleteAttribute();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Delete Attribute operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_delete_attribute KmipSecretRole#operation_delete_attribute}

---

##### `operationDestroy`<sup>Optional</sup> <a name="operationDestroy" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDestroy"></a>

```java
public java.lang.Boolean|IResolvable getOperationDestroy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Destroy operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_destroy KmipSecretRole#operation_destroy}

---

##### `operationDiscoverVersions`<sup>Optional</sup> <a name="operationDiscoverVersions" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDiscoverVersions"></a>

```java
public java.lang.Boolean|IResolvable getOperationDiscoverVersions();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Discover Version operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_discover_versions KmipSecretRole#operation_discover_versions}

---

##### `operationEncrypt`<sup>Optional</sup> <a name="operationEncrypt" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationEncrypt"></a>

```java
public java.lang.Boolean|IResolvable getOperationEncrypt();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Encrypt operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_encrypt KmipSecretRole#operation_encrypt}

---

##### `operationGet`<sup>Optional</sup> <a name="operationGet" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGet"></a>

```java
public java.lang.Boolean|IResolvable getOperationGet();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Get operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_get KmipSecretRole#operation_get}

---

##### `operationGetAttributeList`<sup>Optional</sup> <a name="operationGetAttributeList" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributeList"></a>

```java
public java.lang.Boolean|IResolvable getOperationGetAttributeList();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Get Attribute List operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_get_attribute_list KmipSecretRole#operation_get_attribute_list}

---

##### `operationGetAttributes`<sup>Optional</sup> <a name="operationGetAttributes" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributes"></a>

```java
public java.lang.Boolean|IResolvable getOperationGetAttributes();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Get Attributes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_get_attributes KmipSecretRole#operation_get_attributes}

---

##### `operationImport`<sup>Optional</sup> <a name="operationImport" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationImport"></a>

```java
public java.lang.Boolean|IResolvable getOperationImport();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Import operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_import KmipSecretRole#operation_import}

---

##### `operationLocate`<sup>Optional</sup> <a name="operationLocate" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationLocate"></a>

```java
public java.lang.Boolean|IResolvable getOperationLocate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Locate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_locate KmipSecretRole#operation_locate}

---

##### `operationMac`<sup>Optional</sup> <a name="operationMac" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationMac"></a>

```java
public java.lang.Boolean|IResolvable getOperationMac();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP MAC operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_mac KmipSecretRole#operation_mac}

---

##### `operationMacVerify`<sup>Optional</sup> <a name="operationMacVerify" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationMacVerify"></a>

```java
public java.lang.Boolean|IResolvable getOperationMacVerify();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP MAC Verify operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_mac_verify KmipSecretRole#operation_mac_verify}

---

##### `operationModifyAttribute`<sup>Optional</sup> <a name="operationModifyAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationModifyAttribute"></a>

```java
public java.lang.Boolean|IResolvable getOperationModifyAttribute();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Modify Attribute operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_modify_attribute KmipSecretRole#operation_modify_attribute}

---

##### `operationNone`<sup>Optional</sup> <a name="operationNone" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationNone"></a>

```java
public java.lang.Boolean|IResolvable getOperationNone();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Remove all permissions from this role. May not be specified with any other operation_* params.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_none KmipSecretRole#operation_none}

---

##### `operationQuery`<sup>Optional</sup> <a name="operationQuery" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationQuery"></a>

```java
public java.lang.Boolean|IResolvable getOperationQuery();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Query operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_query KmipSecretRole#operation_query}

---

##### `operationRegister`<sup>Optional</sup> <a name="operationRegister" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRegister"></a>

```java
public java.lang.Boolean|IResolvable getOperationRegister();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Register operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_register KmipSecretRole#operation_register}

---

##### `operationRekey`<sup>Optional</sup> <a name="operationRekey" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRekey"></a>

```java
public java.lang.Boolean|IResolvable getOperationRekey();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Rekey operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_rekey KmipSecretRole#operation_rekey}

---

##### `operationRekeyKeyPair`<sup>Optional</sup> <a name="operationRekeyKeyPair" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRekeyKeyPair"></a>

```java
public java.lang.Boolean|IResolvable getOperationRekeyKeyPair();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Rekey Key Pair operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_rekey_key_pair KmipSecretRole#operation_rekey_key_pair}

---

##### `operationRevoke`<sup>Optional</sup> <a name="operationRevoke" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRevoke"></a>

```java
public java.lang.Boolean|IResolvable getOperationRevoke();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Revoke operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_revoke KmipSecretRole#operation_revoke}

---

##### `operationRngRetrieve`<sup>Optional</sup> <a name="operationRngRetrieve" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRngRetrieve"></a>

```java
public java.lang.Boolean|IResolvable getOperationRngRetrieve();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP RNG Retrieve operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_rng_retrieve KmipSecretRole#operation_rng_retrieve}

---

##### `operationRngSeed`<sup>Optional</sup> <a name="operationRngSeed" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRngSeed"></a>

```java
public java.lang.Boolean|IResolvable getOperationRngSeed();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP RNG Seed operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_rng_seed KmipSecretRole#operation_rng_seed}

---

##### `operationSign`<sup>Optional</sup> <a name="operationSign" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationSign"></a>

```java
public java.lang.Boolean|IResolvable getOperationSign();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Sign operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_sign KmipSecretRole#operation_sign}

---

##### `operationSignatureVerify`<sup>Optional</sup> <a name="operationSignatureVerify" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationSignatureVerify"></a>

```java
public java.lang.Boolean|IResolvable getOperationSignatureVerify();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Grant permission to use the KMIP Signature Verify operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#operation_signature_verify KmipSecretRole#operation_signature_verify}

---

##### `tlsClientKeyBits`<sup>Optional</sup> <a name="tlsClientKeyBits" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyBits"></a>

```java
public java.lang.Number getTlsClientKeyBits();
```

- *Type:* java.lang.Number

Client certificate key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#tls_client_key_bits KmipSecretRole#tls_client_key_bits}

---

##### `tlsClientKeyType`<sup>Optional</sup> <a name="tlsClientKeyType" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyType"></a>

```java
public java.lang.String getTlsClientKeyType();
```

- *Type:* java.lang.String

Client certificate key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#tls_client_key_type KmipSecretRole#tls_client_key_type}

---

##### `tlsClientTtl`<sup>Optional</sup> <a name="tlsClientTtl" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientTtl"></a>

```java
public java.lang.Number getTlsClientTtl();
```

- *Type:* java.lang.Number

Client certificate TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_role#tls_client_ttl KmipSecretRole#tls_client_ttl}

---



