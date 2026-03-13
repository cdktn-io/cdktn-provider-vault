# `pkiSecretBackendAcmeAccount` Submodule <a name="`pkiSecretBackendAcmeAccount` Submodule" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendAcmeAccount <a name="PkiSecretBackendAcmeAccount" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account vault_pki_secret_backend_acme_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/pkisecretbackendacmeaccount"

pkisecretbackendacmeaccount.NewPkiSecretBackendAcmeAccount(scope Construct, id *string, config PkiSecretBackendAcmeAccountConfig) PkiSecretBackendAcmeAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig">PkiSecretBackendAcmeAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig">PkiSecretBackendAcmeAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetEabKey">ResetEabKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetEabKid">ResetEabKid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetKeyType">ResetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetTrustedCa">ResetTrustedCa</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEabKey` <a name="ResetEabKey" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetEabKey"></a>

```go
func ResetEabKey()
```

##### `ResetEabKid` <a name="ResetEabKid" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetEabKid"></a>

```go
func ResetEabKid()
```

##### `ResetKeyType` <a name="ResetKeyType" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetKeyType"></a>

```go
func ResetKeyType()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetTrustedCa` <a name="ResetTrustedCa" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.resetTrustedCa"></a>

```go
func ResetTrustedCa()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PkiSecretBackendAcmeAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/pkisecretbackendacmeaccount"

pkisecretbackendacmeaccount.PkiSecretBackendAcmeAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/pkisecretbackendacmeaccount"

pkisecretbackendacmeaccount.PkiSecretBackendAcmeAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/pkisecretbackendacmeaccount"

pkisecretbackendacmeaccount.PkiSecretBackendAcmeAccount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/pkisecretbackendacmeaccount"

pkisecretbackendacmeaccount.PkiSecretBackendAcmeAccount_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PkiSecretBackendAcmeAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PkiSecretBackendAcmeAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PkiSecretBackendAcmeAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendAcmeAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.activeKeyVersion">ActiveKeyVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.directoryUrlInput">DirectoryUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKeyInput">EabKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKidInput">EabKidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.emailContactsInput">EmailContactsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.keyTypeInput">KeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.trustedCaInput">TrustedCaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.directoryUrl">DirectoryUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKey">EabKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKid">EabKid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.emailContacts">EmailContacts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.trustedCa">TrustedCa</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActiveKeyVersion`<sup>Required</sup> <a name="ActiveKeyVersion" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.activeKeyVersion"></a>

```go
func ActiveKeyVersion() *f64
```

- *Type:* *f64

---

##### `DirectoryUrlInput`<sup>Optional</sup> <a name="DirectoryUrlInput" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.directoryUrlInput"></a>

```go
func DirectoryUrlInput() *string
```

- *Type:* *string

---

##### `EabKeyInput`<sup>Optional</sup> <a name="EabKeyInput" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKeyInput"></a>

```go
func EabKeyInput() *string
```

- *Type:* *string

---

##### `EabKidInput`<sup>Optional</sup> <a name="EabKidInput" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKidInput"></a>

```go
func EabKidInput() *string
```

- *Type:* *string

---

##### `EmailContactsInput`<sup>Optional</sup> <a name="EmailContactsInput" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.emailContactsInput"></a>

```go
func EmailContactsInput() *[]*string
```

- *Type:* *[]*string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.keyTypeInput"></a>

```go
func KeyTypeInput() *string
```

- *Type:* *string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `TrustedCaInput`<sup>Optional</sup> <a name="TrustedCaInput" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.trustedCaInput"></a>

```go
func TrustedCaInput() *string
```

- *Type:* *string

---

##### `DirectoryUrl`<sup>Required</sup> <a name="DirectoryUrl" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.directoryUrl"></a>

```go
func DirectoryUrl() *string
```

- *Type:* *string

---

##### `EabKey`<sup>Required</sup> <a name="EabKey" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKey"></a>

```go
func EabKey() *string
```

- *Type:* *string

---

##### `EabKid`<sup>Required</sup> <a name="EabKid" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.eabKid"></a>

```go
func EabKid() *string
```

- *Type:* *string

---

##### `EmailContacts`<sup>Required</sup> <a name="EmailContacts" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.emailContacts"></a>

```go
func EmailContacts() *[]*string
```

- *Type:* *[]*string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `TrustedCa`<sup>Required</sup> <a name="TrustedCa" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.trustedCa"></a>

```go
func TrustedCa() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendAcmeAccountConfig <a name="PkiSecretBackendAcmeAccountConfig" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/pkisecretbackendacmeaccount"

&pkisecretbackendacmeaccount.PkiSecretBackendAcmeAccountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DirectoryUrl: *string,
	EmailContacts: *[]*string,
	Mount: *string,
	Name: *string,
	EabKey: *string,
	EabKid: *string,
	KeyType: *string,
	Namespace: *string,
	TrustedCa: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.directoryUrl">DirectoryUrl</a></code> | <code>*string</code> | ACME Directory URL. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.emailContacts">EmailContacts</a></code> | <code>*[]*string</code> | Email addresses for the ACME account. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.mount">Mount</a></code> | <code>*string</code> | The path where the PKI secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.name">Name</a></code> | <code>*string</code> | Name of the ACME account. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.eabKey">EabKey</a></code> | <code>*string</code> | A standard base64 encoded external binding token to create the initial account. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.eabKid">EabKid</a></code> | <code>*string</code> | The external binding key ID to create the initial account. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.keyType">KeyType</a></code> | <code>*string</code> | Key type to generate for the account key. Valid values are `ec-256`, `ec-384`, `ec-521`, `rsa-2048`, `rsa-4096`, `rsa-8192`. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.trustedCa">TrustedCa</a></code> | <code>*string</code> | Trusted CA certificates for the ACME server. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DirectoryUrl`<sup>Required</sup> <a name="DirectoryUrl" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.directoryUrl"></a>

```go
DirectoryUrl *string
```

- *Type:* *string

ACME Directory URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#directory_url PkiSecretBackendAcmeAccount#directory_url}

---

##### `EmailContacts`<sup>Required</sup> <a name="EmailContacts" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.emailContacts"></a>

```go
EmailContacts *[]*string
```

- *Type:* *[]*string

Email addresses for the ACME account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#email_contacts PkiSecretBackendAcmeAccount#email_contacts}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

The path where the PKI secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#mount PkiSecretBackendAcmeAccount#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the ACME account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#name PkiSecretBackendAcmeAccount#name}

---

##### `EabKey`<sup>Optional</sup> <a name="EabKey" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.eabKey"></a>

```go
EabKey *string
```

- *Type:* *string

A standard base64 encoded external binding token to create the initial account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#eab_key PkiSecretBackendAcmeAccount#eab_key}

---

##### `EabKid`<sup>Optional</sup> <a name="EabKid" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.eabKid"></a>

```go
EabKid *string
```

- *Type:* *string

The external binding key ID to create the initial account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#eab_kid PkiSecretBackendAcmeAccount#eab_kid}

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.keyType"></a>

```go
KeyType *string
```

- *Type:* *string

Key type to generate for the account key. Valid values are `ec-256`, `ec-384`, `ec-521`, `rsa-2048`, `rsa-4096`, `rsa-8192`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#key_type PkiSecretBackendAcmeAccount#key_type}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#namespace PkiSecretBackendAcmeAccount#namespace}

---

##### `TrustedCa`<sup>Optional</sup> <a name="TrustedCa" id="@cdktn/provider-vault.pkiSecretBackendAcmeAccount.PkiSecretBackendAcmeAccountConfig.property.trustedCa"></a>

```go
TrustedCa *string
```

- *Type:* *string

Trusted CA certificates for the ACME server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#trusted_ca PkiSecretBackendAcmeAccount#trusted_ca}

---



