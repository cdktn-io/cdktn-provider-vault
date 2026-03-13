# `dataVaultPkiSecretBackendExternalCaOrderChallenge` Submodule <a name="`dataVaultPkiSecretBackendExternalCaOrderChallenge` Submodule" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPkiSecretBackendExternalCaOrderChallenge <a name="DataVaultPkiSecretBackendExternalCaOrderChallenge" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/data-sources/pki_secret_backend_external_ca_order_challenge vault_pki_secret_backend_external_ca_order_challenge}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/datavaultpkisecretbackendexternalcaorderchallenge"

datavaultpkisecretbackendexternalcaorderchallenge.NewDataVaultPkiSecretBackendExternalCaOrderChallenge(scope Construct, id *string, config DataVaultPkiSecretBackendExternalCaOrderChallengeConfig) DataVaultPkiSecretBackendExternalCaOrderChallenge
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig">DataVaultPkiSecretBackendExternalCaOrderChallengeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig">DataVaultPkiSecretBackendExternalCaOrderChallengeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultPkiSecretBackendExternalCaOrderChallenge resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/datavaultpkisecretbackendexternalcaorderchallenge"

datavaultpkisecretbackendexternalcaorderchallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/datavaultpkisecretbackendexternalcaorderchallenge"

datavaultpkisecretbackendexternalcaorderchallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/datavaultpkisecretbackendexternalcaorderchallenge"

datavaultpkisecretbackendexternalcaorderchallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/datavaultpkisecretbackendexternalcaorderchallenge"

datavaultpkisecretbackendexternalcaorderchallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataVaultPkiSecretBackendExternalCaOrderChallenge resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataVaultPkiSecretBackendExternalCaOrderChallenge to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataVaultPkiSecretBackendExternalCaOrderChallenge that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/data-sources/pki_secret_backend_external_ca_order_challenge#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultPkiSecretBackendExternalCaOrderChallenge to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.expires">Expires</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.keyAuthorization">KeyAuthorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.challengeTypeInput">ChallengeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.orderIdInput">OrderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.roleNameInput">RoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.challengeType">ChallengeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.orderId">OrderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Expires`<sup>Required</sup> <a name="Expires" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.expires"></a>

```go
func Expires() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyAuthorization`<sup>Required</sup> <a name="KeyAuthorization" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.keyAuthorization"></a>

```go
func KeyAuthorization() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `ChallengeTypeInput`<sup>Optional</sup> <a name="ChallengeTypeInput" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.challengeTypeInput"></a>

```go
func ChallengeTypeInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OrderIdInput`<sup>Optional</sup> <a name="OrderIdInput" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.orderIdInput"></a>

```go
func OrderIdInput() *string
```

- *Type:* *string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.roleNameInput"></a>

```go
func RoleNameInput() *string
```

- *Type:* *string

---

##### `ChallengeType`<sup>Required</sup> <a name="ChallengeType" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.challengeType"></a>

```go
func ChallengeType() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.orderId"></a>

```go
func OrderId() *string
```

- *Type:* *string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallenge.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPkiSecretBackendExternalCaOrderChallengeConfig <a name="DataVaultPkiSecretBackendExternalCaOrderChallengeConfig" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/datavaultpkisecretbackendexternalcaorderchallenge"

&datavaultpkisecretbackendexternalcaorderchallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ChallengeType: *string,
	Identifier: *string,
	Mount: *string,
	OrderId: *string,
	RoleName: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.challengeType">ChallengeType</a></code> | <code>*string</code> | The type of ACME challenge to retrieve. Valid values are `http-01`, `dns-01`, `tls-alpn-01`. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.identifier">Identifier</a></code> | <code>*string</code> | The identifier (domain name) for which to retrieve the challenge. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.mount">Mount</a></code> | <code>*string</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.orderId">OrderId</a></code> | <code>*string</code> | The unique identifier for the ACME order. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.roleName">RoleName</a></code> | <code>*string</code> | Name of the role associated with the order. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChallengeType`<sup>Required</sup> <a name="ChallengeType" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.challengeType"></a>

```go
ChallengeType *string
```

- *Type:* *string

The type of ACME challenge to retrieve. Valid values are `http-01`, `dns-01`, `tls-alpn-01`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/data-sources/pki_secret_backend_external_ca_order_challenge#challenge_type DataVaultPkiSecretBackendExternalCaOrderChallenge#challenge_type}

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

The identifier (domain name) for which to retrieve the challenge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/data-sources/pki_secret_backend_external_ca_order_challenge#identifier DataVaultPkiSecretBackendExternalCaOrderChallenge#identifier}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/data-sources/pki_secret_backend_external_ca_order_challenge#mount DataVaultPkiSecretBackendExternalCaOrderChallenge#mount}

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.orderId"></a>

```go
OrderId *string
```

- *Type:* *string

The unique identifier for the ACME order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/data-sources/pki_secret_backend_external_ca_order_challenge#order_id DataVaultPkiSecretBackendExternalCaOrderChallenge#order_id}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.roleName"></a>

```go
RoleName *string
```

- *Type:* *string

Name of the role associated with the order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/data-sources/pki_secret_backend_external_ca_order_challenge#role_name DataVaultPkiSecretBackendExternalCaOrderChallenge#role_name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultPkiSecretBackendExternalCaOrderChallenge.DataVaultPkiSecretBackendExternalCaOrderChallengeConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/data-sources/pki_secret_backend_external_ca_order_challenge#namespace DataVaultPkiSecretBackendExternalCaOrderChallenge#namespace}

---



