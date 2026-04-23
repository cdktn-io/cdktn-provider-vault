# `pkiExternalCaSecretBackendOrderChallengeFulfilled` Submodule <a name="`pkiExternalCaSecretBackendOrderChallengeFulfilled` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendOrderChallengeFulfilled <a name="PkiExternalCaSecretBackendOrderChallengeFulfilled" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_order_challenge_fulfilled vault_pki_external_ca_secret_backend_order_challenge_fulfilled}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/pkiexternalcasecretbackendorderchallengefulfilled"

pkiexternalcasecretbackendorderchallengefulfilled.NewPkiExternalCaSecretBackendOrderChallengeFulfilled(scope Construct, id *string, config PkiExternalCaSecretBackendOrderChallengeFulfilledConfig) PkiExternalCaSecretBackendOrderChallengeFulfilled
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig">PkiExternalCaSecretBackendOrderChallengeFulfilledConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig">PkiExternalCaSecretBackendOrderChallengeFulfilledConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendOrderChallengeFulfilled resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/pkiexternalcasecretbackendorderchallengefulfilled"

pkiexternalcasecretbackendorderchallengefulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/pkiexternalcasecretbackendorderchallengefulfilled"

pkiexternalcasecretbackendorderchallengefulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/pkiexternalcasecretbackendorderchallengefulfilled"

pkiexternalcasecretbackendorderchallengefulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/pkiexternalcasecretbackendorderchallengefulfilled"

pkiexternalcasecretbackendorderchallengefulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendOrderChallengeFulfilled resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PkiExternalCaSecretBackendOrderChallengeFulfilled to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PkiExternalCaSecretBackendOrderChallengeFulfilled that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_order_challenge_fulfilled#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendOrderChallengeFulfilled to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.challengeTypeInput">ChallengeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.orderIdInput">OrderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.roleNameInput">RoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.challengeType">ChallengeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.orderId">OrderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChallengeTypeInput`<sup>Optional</sup> <a name="ChallengeTypeInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.challengeTypeInput"></a>

```go
func ChallengeTypeInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OrderIdInput`<sup>Optional</sup> <a name="OrderIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.orderIdInput"></a>

```go
func OrderIdInput() *string
```

- *Type:* *string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.roleNameInput"></a>

```go
func RoleNameInput() *string
```

- *Type:* *string

---

##### `ChallengeType`<sup>Required</sup> <a name="ChallengeType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.challengeType"></a>

```go
func ChallengeType() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.orderId"></a>

```go
func OrderId() *string
```

- *Type:* *string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilled.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendOrderChallengeFulfilledConfig <a name="PkiExternalCaSecretBackendOrderChallengeFulfilledConfig" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/pkiexternalcasecretbackendorderchallengefulfilled"

&pkiexternalcasecretbackendorderchallengefulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig {
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
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.challengeType">ChallengeType</a></code> | <code>*string</code> | The type of ACME challenge that was fulfilled. Valid values are `http-01`, `dns-01`, `tls-alpn-01`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.identifier">Identifier</a></code> | <code>*string</code> | The identifier (domain name) for which the challenge was fulfilled. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.mount">Mount</a></code> | <code>*string</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.orderId">OrderId</a></code> | <code>*string</code> | The unique identifier for the ACME order. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.roleName">RoleName</a></code> | <code>*string</code> | Name of the role associated with the order. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChallengeType`<sup>Required</sup> <a name="ChallengeType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.challengeType"></a>

```go
ChallengeType *string
```

- *Type:* *string

The type of ACME challenge that was fulfilled. Valid values are `http-01`, `dns-01`, `tls-alpn-01`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_order_challenge_fulfilled#challenge_type PkiExternalCaSecretBackendOrderChallengeFulfilled#challenge_type}

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

The identifier (domain name) for which the challenge was fulfilled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_order_challenge_fulfilled#identifier PkiExternalCaSecretBackendOrderChallengeFulfilled#identifier}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_order_challenge_fulfilled#mount PkiExternalCaSecretBackendOrderChallengeFulfilled#mount}

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.orderId"></a>

```go
OrderId *string
```

- *Type:* *string

The unique identifier for the ACME order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_order_challenge_fulfilled#order_id PkiExternalCaSecretBackendOrderChallengeFulfilled#order_id}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.roleName"></a>

```go
RoleName *string
```

- *Type:* *string

Name of the role associated with the order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_order_challenge_fulfilled#role_name PkiExternalCaSecretBackendOrderChallengeFulfilled#role_name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderChallengeFulfilled.PkiExternalCaSecretBackendOrderChallengeFulfilledConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/pki_external_ca_secret_backend_order_challenge_fulfilled#namespace PkiExternalCaSecretBackendOrderChallengeFulfilled#namespace}

---



