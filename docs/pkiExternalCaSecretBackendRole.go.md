# `pkiExternalCaSecretBackendRole` Submodule <a name="`pkiExternalCaSecretBackendRole` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendRole <a name="PkiExternalCaSecretBackendRole" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role vault_pki_external_ca_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/pkiexternalcasecretbackendrole"

pkiexternalcasecretbackendrole.NewPkiExternalCaSecretBackendRole(scope Construct, id *string, config PkiExternalCaSecretBackendRoleConfig) PkiExternalCaSecretBackendRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig">PkiExternalCaSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig">PkiExternalCaSecretBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetAllowedChallengeTypes">ResetAllowedChallengeTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetAllowedDomainOptions">ResetAllowedDomainOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetAllowedDomains">ResetAllowedDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetCsrGenerateKeyType">ResetCsrGenerateKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetCsrIdentifierPopulation">ResetCsrIdentifierPopulation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetForce">ResetForce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedChallengeTypes` <a name="ResetAllowedChallengeTypes" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetAllowedChallengeTypes"></a>

```go
func ResetAllowedChallengeTypes()
```

##### `ResetAllowedDomainOptions` <a name="ResetAllowedDomainOptions" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetAllowedDomainOptions"></a>

```go
func ResetAllowedDomainOptions()
```

##### `ResetAllowedDomains` <a name="ResetAllowedDomains" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetAllowedDomains"></a>

```go
func ResetAllowedDomains()
```

##### `ResetCsrGenerateKeyType` <a name="ResetCsrGenerateKeyType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetCsrGenerateKeyType"></a>

```go
func ResetCsrGenerateKeyType()
```

##### `ResetCsrIdentifierPopulation` <a name="ResetCsrIdentifierPopulation" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetCsrIdentifierPopulation"></a>

```go
func ResetCsrIdentifierPopulation()
```

##### `ResetForce` <a name="ResetForce" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetForce"></a>

```go
func ResetForce()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendRole resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/pkiexternalcasecretbackendrole"

pkiexternalcasecretbackendrole.PkiExternalCaSecretBackendRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/pkiexternalcasecretbackendrole"

pkiexternalcasecretbackendrole.PkiExternalCaSecretBackendRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/pkiexternalcasecretbackendrole"

pkiexternalcasecretbackendrole.PkiExternalCaSecretBackendRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/pkiexternalcasecretbackendrole"

pkiexternalcasecretbackendrole.PkiExternalCaSecretBackendRole_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PkiExternalCaSecretBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PkiExternalCaSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.lastUpdateDate">LastUpdateDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.acmeAccountNameInput">AcmeAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedChallengeTypesInput">AllowedChallengeTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomainOptionsInput">AllowedDomainOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomainsInput">AllowedDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrGenerateKeyTypeInput">CsrGenerateKeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrIdentifierPopulationInput">CsrIdentifierPopulationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.forceInput">ForceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.acmeAccountName">AcmeAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedChallengeTypes">AllowedChallengeTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomainOptions">AllowedDomainOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomains">AllowedDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrGenerateKeyType">CsrGenerateKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrIdentifierPopulation">CsrIdentifierPopulation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.force">Force</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `LastUpdateDate`<sup>Required</sup> <a name="LastUpdateDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.lastUpdateDate"></a>

```go
func LastUpdateDate() *string
```

- *Type:* *string

---

##### `AcmeAccountNameInput`<sup>Optional</sup> <a name="AcmeAccountNameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.acmeAccountNameInput"></a>

```go
func AcmeAccountNameInput() *string
```

- *Type:* *string

---

##### `AllowedChallengeTypesInput`<sup>Optional</sup> <a name="AllowedChallengeTypesInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedChallengeTypesInput"></a>

```go
func AllowedChallengeTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedDomainOptionsInput`<sup>Optional</sup> <a name="AllowedDomainOptionsInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomainOptionsInput"></a>

```go
func AllowedDomainOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedDomainsInput`<sup>Optional</sup> <a name="AllowedDomainsInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomainsInput"></a>

```go
func AllowedDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CsrGenerateKeyTypeInput`<sup>Optional</sup> <a name="CsrGenerateKeyTypeInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrGenerateKeyTypeInput"></a>

```go
func CsrGenerateKeyTypeInput() *string
```

- *Type:* *string

---

##### `CsrIdentifierPopulationInput`<sup>Optional</sup> <a name="CsrIdentifierPopulationInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrIdentifierPopulationInput"></a>

```go
func CsrIdentifierPopulationInput() *string
```

- *Type:* *string

---

##### `ForceInput`<sup>Optional</sup> <a name="ForceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.forceInput"></a>

```go
func ForceInput() interface{}
```

- *Type:* interface{}

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `AcmeAccountName`<sup>Required</sup> <a name="AcmeAccountName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.acmeAccountName"></a>

```go
func AcmeAccountName() *string
```

- *Type:* *string

---

##### `AllowedChallengeTypes`<sup>Required</sup> <a name="AllowedChallengeTypes" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedChallengeTypes"></a>

```go
func AllowedChallengeTypes() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedDomainOptions`<sup>Required</sup> <a name="AllowedDomainOptions" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomainOptions"></a>

```go
func AllowedDomainOptions() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedDomains`<sup>Required</sup> <a name="AllowedDomains" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomains"></a>

```go
func AllowedDomains() *[]*string
```

- *Type:* *[]*string

---

##### `CsrGenerateKeyType`<sup>Required</sup> <a name="CsrGenerateKeyType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrGenerateKeyType"></a>

```go
func CsrGenerateKeyType() *string
```

- *Type:* *string

---

##### `CsrIdentifierPopulation`<sup>Required</sup> <a name="CsrIdentifierPopulation" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrIdentifierPopulation"></a>

```go
func CsrIdentifierPopulation() *string
```

- *Type:* *string

---

##### `Force`<sup>Required</sup> <a name="Force" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.force"></a>

```go
func Force() interface{}
```

- *Type:* interface{}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendRoleConfig <a name="PkiExternalCaSecretBackendRoleConfig" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/pkiexternalcasecretbackendrole"

&pkiexternalcasecretbackendrole.PkiExternalCaSecretBackendRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AcmeAccountName: *string,
	Mount: *string,
	Name: *string,
	AllowedChallengeTypes: *[]*string,
	AllowedDomainOptions: *[]*string,
	AllowedDomains: *[]*string,
	CsrGenerateKeyType: *string,
	CsrIdentifierPopulation: *string,
	Force: interface{},
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.acmeAccountName">AcmeAccountName</a></code> | <code>*string</code> | The ACME account to use when validating certificates. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.mount">Mount</a></code> | <code>*string</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.name">Name</a></code> | <code>*string</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.allowedChallengeTypes">AllowedChallengeTypes</a></code> | <code>*[]*string</code> | The list of challenge types that are allowed to be used. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.allowedDomainOptions">AllowedDomainOptions</a></code> | <code>*[]*string</code> | A list of keyword options that influence how values within allowed_domains are interpreted against the requested set of identifiers from the client. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.allowedDomains">AllowedDomains</a></code> | <code>*[]*string</code> | A list of domains the role will accept certificates for. May contain templates, as with ACL Path Templating. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.csrGenerateKeyType">CsrGenerateKeyType</a></code> | <code>*string</code> | The key type and size/parameters to use when generating a new key if running in the identifier workflow. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.csrIdentifierPopulation">CsrIdentifierPopulation</a></code> | <code>*string</code> | The technique used to populate a CSR from the provided identifiers in the identifier workflow. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.force">Force</a></code> | <code>interface{}</code> | Force deletion even when active orders exist. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AcmeAccountName`<sup>Required</sup> <a name="AcmeAccountName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.acmeAccountName"></a>

```go
AcmeAccountName *string
```

- *Type:* *string

The ACME account to use when validating certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role#acme_account_name PkiExternalCaSecretBackendRole#acme_account_name}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role#mount PkiExternalCaSecretBackendRole#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role#name PkiExternalCaSecretBackendRole#name}

---

##### `AllowedChallengeTypes`<sup>Optional</sup> <a name="AllowedChallengeTypes" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.allowedChallengeTypes"></a>

```go
AllowedChallengeTypes *[]*string
```

- *Type:* *[]*string

The list of challenge types that are allowed to be used.

Valid values are: `http-01`, `dns-01`, `tls-alpn-01`. Defaults to all challenge types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role#allowed_challenge_types PkiExternalCaSecretBackendRole#allowed_challenge_types}

---

##### `AllowedDomainOptions`<sup>Optional</sup> <a name="AllowedDomainOptions" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.allowedDomainOptions"></a>

```go
AllowedDomainOptions *[]*string
```

- *Type:* *[]*string

A list of keyword options that influence how values within allowed_domains are interpreted against the requested set of identifiers from the client.

Valid values are: `bare_domains`, `subdomains`, `wildcards`, `globs`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role#allowed_domain_options PkiExternalCaSecretBackendRole#allowed_domain_options}

---

##### `AllowedDomains`<sup>Optional</sup> <a name="AllowedDomains" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.allowedDomains"></a>

```go
AllowedDomains *[]*string
```

- *Type:* *[]*string

A list of domains the role will accept certificates for. May contain templates, as with ACL Path Templating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role#allowed_domains PkiExternalCaSecretBackendRole#allowed_domains}

---

##### `CsrGenerateKeyType`<sup>Optional</sup> <a name="CsrGenerateKeyType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.csrGenerateKeyType"></a>

```go
CsrGenerateKeyType *string
```

- *Type:* *string

The key type and size/parameters to use when generating a new key if running in the identifier workflow.

Valid values are: `ec-256`, `ec-384`, `ec-521`, `rsa-2048`, `rsa-4096`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role#csr_generate_key_type PkiExternalCaSecretBackendRole#csr_generate_key_type}

---

##### `CsrIdentifierPopulation`<sup>Optional</sup> <a name="CsrIdentifierPopulation" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.csrIdentifierPopulation"></a>

```go
CsrIdentifierPopulation *string
```

- *Type:* *string

The technique used to populate a CSR from the provided identifiers in the identifier workflow.

Valid values are: `cn_first`, `sans_only`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role#csr_identifier_population PkiExternalCaSecretBackendRole#csr_identifier_population}

---

##### `Force`<sup>Optional</sup> <a name="Force" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.force"></a>

```go
Force interface{}
```

- *Type:* interface{}

Force deletion even when active orders exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role#force PkiExternalCaSecretBackendRole#force}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role#namespace PkiExternalCaSecretBackendRole#namespace}

---



