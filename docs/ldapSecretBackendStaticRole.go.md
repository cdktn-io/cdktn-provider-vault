# `ldapSecretBackendStaticRole` Submodule <a name="`ldapSecretBackendStaticRole` Submodule" id="@cdktn/provider-vault.ldapSecretBackendStaticRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapSecretBackendStaticRole <a name="LdapSecretBackendStaticRole" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_static_role vault_ldap_secret_backend_static_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ldapsecretbackendstaticrole"

ldapsecretbackendstaticrole.NewLdapSecretBackendStaticRole(scope Construct, id *string, config LdapSecretBackendStaticRoleConfig) LdapSecretBackendStaticRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig">LdapSecretBackendStaticRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig">LdapSecretBackendStaticRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetDisableAutomatedRotation">ResetDisableAutomatedRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetDn">ResetDn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetMount">ResetMount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetPasswordWo">ResetPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetPasswordWoVersion">ResetPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetRotationPolicy">ResetRotationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetRotationSchedule">ResetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetRotationWindow">ResetRotationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetSkipImportRotation">ResetSkipImportRotation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDisableAutomatedRotation` <a name="ResetDisableAutomatedRotation" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetDisableAutomatedRotation"></a>

```go
func ResetDisableAutomatedRotation()
```

##### `ResetDn` <a name="ResetDn" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetDn"></a>

```go
func ResetDn()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetId"></a>

```go
func ResetId()
```

##### `ResetMount` <a name="ResetMount" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetMount"></a>

```go
func ResetMount()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPasswordWo` <a name="ResetPasswordWo" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetPasswordWo"></a>

```go
func ResetPasswordWo()
```

##### `ResetPasswordWoVersion` <a name="ResetPasswordWoVersion" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetPasswordWoVersion"></a>

```go
func ResetPasswordWoVersion()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetRotationPeriod"></a>

```go
func ResetRotationPeriod()
```

##### `ResetRotationPolicy` <a name="ResetRotationPolicy" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetRotationPolicy"></a>

```go
func ResetRotationPolicy()
```

##### `ResetRotationSchedule` <a name="ResetRotationSchedule" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetRotationSchedule"></a>

```go
func ResetRotationSchedule()
```

##### `ResetRotationWindow` <a name="ResetRotationWindow" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetRotationWindow"></a>

```go
func ResetRotationWindow()
```

##### `ResetSkipImportRotation` <a name="ResetSkipImportRotation" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetSkipImportRotation"></a>

```go
func ResetSkipImportRotation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LdapSecretBackendStaticRole resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ldapsecretbackendstaticrole"

ldapsecretbackendstaticrole.LdapSecretBackendStaticRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ldapsecretbackendstaticrole"

ldapsecretbackendstaticrole.LdapSecretBackendStaticRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ldapsecretbackendstaticrole"

ldapsecretbackendstaticrole.LdapSecretBackendStaticRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ldapsecretbackendstaticrole"

ldapsecretbackendstaticrole.LdapSecretBackendStaticRole_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LdapSecretBackendStaticRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LdapSecretBackendStaticRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LdapSecretBackendStaticRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_static_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LdapSecretBackendStaticRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.disableAutomatedRotationInput">DisableAutomatedRotationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dnInput">DnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.passwordWoInput">PasswordWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.passwordWoVersionInput">PasswordWoVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.roleNameInput">RoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPolicyInput">RotationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationScheduleInput">RotationScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationWindowInput">RotationWindowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.skipImportRotationInput">SkipImportRotationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dn">Dn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.passwordWo">PasswordWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPeriod">RotationPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPolicy">RotationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationSchedule">RotationSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationWindow">RotationWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.skipImportRotation">SkipImportRotation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisableAutomatedRotationInput`<sup>Optional</sup> <a name="DisableAutomatedRotationInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.disableAutomatedRotationInput"></a>

```go
func DisableAutomatedRotationInput() interface{}
```

- *Type:* interface{}

---

##### `DnInput`<sup>Optional</sup> <a name="DnInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dnInput"></a>

```go
func DnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PasswordWoInput`<sup>Optional</sup> <a name="PasswordWoInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.passwordWoInput"></a>

```go
func PasswordWoInput() *string
```

- *Type:* *string

---

##### `PasswordWoVersionInput`<sup>Optional</sup> <a name="PasswordWoVersionInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.passwordWoVersionInput"></a>

```go
func PasswordWoVersionInput() *f64
```

- *Type:* *f64

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.roleNameInput"></a>

```go
func RoleNameInput() *string
```

- *Type:* *string

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPeriodInput"></a>

```go
func RotationPeriodInput() *f64
```

- *Type:* *f64

---

##### `RotationPolicyInput`<sup>Optional</sup> <a name="RotationPolicyInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPolicyInput"></a>

```go
func RotationPolicyInput() *string
```

- *Type:* *string

---

##### `RotationScheduleInput`<sup>Optional</sup> <a name="RotationScheduleInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationScheduleInput"></a>

```go
func RotationScheduleInput() *string
```

- *Type:* *string

---

##### `RotationWindowInput`<sup>Optional</sup> <a name="RotationWindowInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationWindowInput"></a>

```go
func RotationWindowInput() *f64
```

- *Type:* *f64

---

##### `SkipImportRotationInput`<sup>Optional</sup> <a name="SkipImportRotationInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.skipImportRotationInput"></a>

```go
func SkipImportRotationInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `DisableAutomatedRotation`<sup>Required</sup> <a name="DisableAutomatedRotation" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.disableAutomatedRotation"></a>

```go
func DisableAutomatedRotation() interface{}
```

- *Type:* interface{}

---

##### `Dn`<sup>Required</sup> <a name="Dn" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dn"></a>

```go
func Dn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `PasswordWo`<sup>Required</sup> <a name="PasswordWo" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.passwordWo"></a>

```go
func PasswordWo() *string
```

- *Type:* *string

---

##### `PasswordWoVersion`<sup>Required</sup> <a name="PasswordWoVersion" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.passwordWoVersion"></a>

```go
func PasswordWoVersion() *f64
```

- *Type:* *f64

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPeriod"></a>

```go
func RotationPeriod() *f64
```

- *Type:* *f64

---

##### `RotationPolicy`<sup>Required</sup> <a name="RotationPolicy" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPolicy"></a>

```go
func RotationPolicy() *string
```

- *Type:* *string

---

##### `RotationSchedule`<sup>Required</sup> <a name="RotationSchedule" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationSchedule"></a>

```go
func RotationSchedule() *string
```

- *Type:* *string

---

##### `RotationWindow`<sup>Required</sup> <a name="RotationWindow" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationWindow"></a>

```go
func RotationWindow() *f64
```

- *Type:* *f64

---

##### `SkipImportRotation`<sup>Required</sup> <a name="SkipImportRotation" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.skipImportRotation"></a>

```go
func SkipImportRotation() interface{}
```

- *Type:* interface{}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LdapSecretBackendStaticRoleConfig <a name="LdapSecretBackendStaticRoleConfig" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ldapsecretbackendstaticrole"

&ldapsecretbackendstaticrole.LdapSecretBackendStaticRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	RoleName: *string,
	Username: *string,
	DisableAutomatedRotation: interface{},
	Dn: *string,
	Id: *string,
	Mount: *string,
	Namespace: *string,
	PasswordWo: *string,
	PasswordWoVersion: *f64,
	RotationPeriod: *f64,
	RotationPolicy: *string,
	RotationSchedule: *string,
	RotationWindow: *f64,
	SkipImportRotation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.roleName">RoleName</a></code> | <code>*string</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.username">Username</a></code> | <code>*string</code> | The username of the existing LDAP entry to manage password rotation for. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>interface{}</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.dn">Dn</a></code> | <code>*string</code> | Distinguished name (DN) of the existing LDAP entry to manage password rotation for. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_static_role#id LdapSecretBackendStaticRole#id}. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.mount">Mount</a></code> | <code>*string</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.passwordWo">PasswordWo</a></code> | <code>*string</code> | Password for the static role. This is required for Vault to manage an existing account and enable rotation. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>*f64</code> | Version counter for write-only password. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>*f64</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotationPolicy">RotationPolicy</a></code> | <code>*string</code> | The rotation policy to use for this credential. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotationSchedule">RotationSchedule</a></code> | <code>*string</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotationWindow">RotationWindow</a></code> | <code>*f64</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.skipImportRotation">SkipImportRotation</a></code> | <code>interface{}</code> | Skip rotation of the password on import. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.roleName"></a>

```go
RoleName *string
```

- *Type:* *string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_static_role#role_name LdapSecretBackendStaticRole#role_name}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username of the existing LDAP entry to manage password rotation for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_static_role#username LdapSecretBackendStaticRole#username}

---

##### `DisableAutomatedRotation`<sup>Optional</sup> <a name="DisableAutomatedRotation" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.disableAutomatedRotation"></a>

```go
DisableAutomatedRotation interface{}
```

- *Type:* interface{}

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_static_role#disable_automated_rotation LdapSecretBackendStaticRole#disable_automated_rotation}

---

##### `Dn`<sup>Optional</sup> <a name="Dn" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.dn"></a>

```go
Dn *string
```

- *Type:* *string

Distinguished name (DN) of the existing LDAP entry to manage password rotation for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_static_role#dn LdapSecretBackendStaticRole#dn}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_static_role#id LdapSecretBackendStaticRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_static_role#mount LdapSecretBackendStaticRole#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_static_role#namespace LdapSecretBackendStaticRole#namespace}

---

##### `PasswordWo`<sup>Optional</sup> <a name="PasswordWo" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.passwordWo"></a>

```go
PasswordWo *string
```

- *Type:* *string

Password for the static role. This is required for Vault to manage an existing account and enable rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_static_role#password_wo LdapSecretBackendStaticRole#password_wo}

---

##### `PasswordWoVersion`<sup>Optional</sup> <a name="PasswordWoVersion" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.passwordWoVersion"></a>

```go
PasswordWoVersion *f64
```

- *Type:* *f64

Version counter for write-only password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_static_role#password_wo_version LdapSecretBackendStaticRole#password_wo_version}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotationPeriod"></a>

```go
RotationPeriod *f64
```

- *Type:* *f64

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_static_role#rotation_period LdapSecretBackendStaticRole#rotation_period}

---

##### `RotationPolicy`<sup>Optional</sup> <a name="RotationPolicy" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotationPolicy"></a>

```go
RotationPolicy *string
```

- *Type:* *string

The rotation policy to use for this credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_static_role#rotation_policy LdapSecretBackendStaticRole#rotation_policy}

---

##### `RotationSchedule`<sup>Optional</sup> <a name="RotationSchedule" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotationSchedule"></a>

```go
RotationSchedule *string
```

- *Type:* *string

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_static_role#rotation_schedule LdapSecretBackendStaticRole#rotation_schedule}

---

##### `RotationWindow`<sup>Optional</sup> <a name="RotationWindow" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotationWindow"></a>

```go
RotationWindow *f64
```

- *Type:* *f64

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_static_role#rotation_window LdapSecretBackendStaticRole#rotation_window}

---

##### `SkipImportRotation`<sup>Optional</sup> <a name="SkipImportRotation" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.skipImportRotation"></a>

```go
SkipImportRotation interface{}
```

- *Type:* interface{}

Skip rotation of the password on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_static_role#skip_import_rotation LdapSecretBackendStaticRole#skip_import_rotation}

---



